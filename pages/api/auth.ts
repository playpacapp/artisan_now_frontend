// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type User = {
  id: number;
  username: string;
  password: string;
};

let users: User[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    
    switch (req.url) {
      case 'auth/register':
        handleRegister(req, res);
        break;
      case 'auth/login':
        handleLogin(req, res);
        break;
      default:
        res.status(404).send('Not Found');
        break;
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}

function handleRegister(req: NextApiRequest, res: NextApiResponse) {
  const { username, password, currentRole } = req.body;

  // Validation: Check if username already exists
  if (users.some((user) => user.username === username)) {
    res.status(400).send('Username already taken');
    return;
  }

  // Generate unique ID for new user
  const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  // Create new user and add to users array
  const newUser: User = { id, username, password };
  users.push(newUser);

  // Return JWT token or session cookie for new user
  // You can use any authentication library of your choice
  res.status(200).json({ token: 'fake-jwt-token' });
}

function handleLogin(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  // Validation: Check if user with given username exists and password matches
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    res.status(401).send('Invalid credentials');
    return;
  }

  // Return JWT token or session cookie for authenticated user
  // You can use any authentication library of your choice
  res.status(200).json({ token: 'fake-jwt-token' });
}