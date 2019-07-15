import Passport from 'passport';
import PassportJWT from 'passport-jwt';
import {
    config
} from '../../config/config';
import User from '../model/user';
export const configJWTStrategy = () => {
    const Opts = {
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.secret,
    };
    Passport.use(new PassportJWT.Strategy(Opts, (payload, done) => {
        User.findOne({ _id: payload._id }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        })
        return done(null, payload);
    }));
}

