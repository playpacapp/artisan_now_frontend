// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import users from "./data.json";

export default function handler (req, res) {
  if (req.method === 'POST') {
    
    switch (req.url) {
      case '/api/auth/register':
        handleRegister(req, res);
        break;
      default:
        res.status(404).send('Server not found');
        break;
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}

function handleRegister(req, res) {
  const { email, password, permission } = req.body;

  // Validation: Check if username already exists
  if (users.length>0 && users.some((user) => user.email === email)) {
    res.status(400).send({message:'Username already taken'});
    return;
  }

  // Generate unique ID for new user
  const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  // Create new user and add to users array
  const newUser = { id, email, password, permission };
  users.push(newUser);

  // Return JWT token or session cookie for new user
  // You can use any authentication library of your choice
  res.status(200).json({ user:newUser });
}