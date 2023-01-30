import express, { Request, Response } from 'express';
import User from '../database/models/user.model';
import { comparePassword } from './bcrypt';

export const signIn = async (req: Request, res: Response) => {
<<<<<<< HEAD
	const { username, password } = req.body;
	if (!username || !password) {
		return res.status(400).json({ message: 'Please filled the field correctly' });
	}
	try {
		const user = await User.findOne({ username: username });
		const compare = await comparePassword(password, user!.password);
		if (!user || !compare) {
			return res.status(404).json({ message: 'Wrong username or password' });
		}
	} catch (err) {
		return res.status(500).json({ message: err });
	}
};
=======
     const { username, password } = req.body;

     if (!username || !password) {
          return res.status(400).json({ message: "Please filled the field correctly" });
     }
     try {
          const user = await User.findOne({ username: username });
          const compare = await comparePassword(password, user!.password);
          if (!user || !compare) {
               return res.status(404).json({ message: "Wrong username or password" });
          }
     } catch (err) {
          return res.status(500).json({ message: err });
     }
};

>>>>>>> c4f644868aa56f3d8cb9aa60adbfe2f5f33dc200
