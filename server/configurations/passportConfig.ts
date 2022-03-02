import passport from "passport";
import GoogleStrategy from "passport-google-oidc";
import AuthenticationService from "../services/Authentication.service";
import config from "../config";

export default () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        callbackURL: "/oauth2/redirect/google",
        scope: ["profile", "email"],
      },
      async (issuer, profile, cb) => {
        return await AuthenticationService.prototype.authenticate(
          {
            ...profile,
            issuer,
          },
          cb
        );
      }
    )
  );

  passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
      cb(null, { id: user.id, email: user.email, full_name: user.full_name });
    });
  });

  passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, user);
    });
  });
};
