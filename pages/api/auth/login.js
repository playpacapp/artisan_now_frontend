// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import users from "./data.json";

export default function handler (req, res) {
  if (req.method === 'POST') {
    
    switch (req.url) {
      case '/api/auth/login':
        handleLogin(req, res);
        break;
      default:
        res.status(404).send({message:'Server not found'});
        break;
    }
  } else {
    res.status(405).send({message:'Method Not Allowed'});
  }
}

function handleLogin(req, res) {
  const { email, password } = req.body;
  //users = [{"id":1,"email":"artisan2.test@gmail.com","password":"123","permission":["user","artisan"]}];
  // Validation: Check if user with given email exists and password matches
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    res.status(401).send({message:'Invalid credentials'});
    return;
  }

  // Return JWT token or session cookie for authenticated user
  // You can use any authentication library of your choice
  res.status(200).json({ token: 'fake-jwt-token', user: user });
}