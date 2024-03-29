import express, { Express } from 'express';
import dotenv, { config } from 'dotenv';
import bodyParser from 'body-parser';
import 'ejs';
import path from 'node:path';
import routes from './routes/routes';
import passport from 'passport';
import mongoose from 'mongoose';
import session from 'express-session';
import './config/passport';
import { sessionConfig } from './modules/session';

const app: Express = express();

dotenv.config();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// middlewares
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');
app.use(session(sessionConfig));
// init passport on every route call.
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI!);
		console.log(`Server is running at https://localhost:${PORT}`);
	} catch (err) {
		console.log(err);
	}
});
