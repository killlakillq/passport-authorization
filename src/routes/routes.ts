import * as express from 'express';
import { isAuthenticated, passportAuthenticate } from '../config/passport';
import { auth, login, registration, session, users } from '../controllers/render';
import { signIn } from '../modules/signin';
import { signUp } from '../modules/signup';
import passport from 'passport';
import { handleValidationErrors, validation } from '../modules/validator';

const router = express.Router();

router.get('/login', login);
router.get('/registration', registration);
router.get('/users', isAuthenticated, users);
router.post('/login', validation, handleValidationErrors, passportAuthenticate, signIn);
// router.post('/login', );
router.post('/registration', validation, handleValidationErrors, signUp);
router.post('/users', isAuthenticated, auth);
router.use(session);

export = router;
