import fs from 'fs';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import express = require('express');

interface User {
  id: number;
  email: string;
  password: string;
}

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const db = JSON.parse(fs.readFileSync('db.json', 'utf8'));
    const user = db.users.find((u: User) => u.email === email && u.password === password);

    if (user) {
      const token = jwt.sign({ id: user.id }, 'your-secret-key', { expiresIn: '1h' });
      res.json({ authenticated: true, token });
    } else {
      res.status(401).json({ authenticated: false });
    }
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
