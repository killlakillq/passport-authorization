import express, { Request, Response } from 'express';
import User from '../database/models/user.model';
import { hashedPassword } from './bcrypt';

export const signUp = async (req: Request, res: Response): Promise<void> => {
     const { username, password } = req.body;
     const hash = await hashedPassword(password);
     try {
          await User.create({
               username: username,
               password: hash
          });
          return res.status(200).redirect('/login');
     } catch (err) {
          console.log(err);
     } 
}
