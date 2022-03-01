import passport from "passport";
import GoogleStrategy from "passport-google-oidc";
import config from "../config";

export default () => {
    console.log('hello')
  passport.use(
    new GoogleStrategy(
      {
        clientID: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        callbackURL: "/oauth2/redirect/google",
        scope: ["profile", "email"],
      },
      (issuer, profile, cb) => {
        console.log(profile, issuer);
      }
    )
  );
};
