import UserModel from "../models/UserModel";

export default class AuthenticationService {
  async authenticate(data, callback) {
    try {
      const user = await UserModel.find({ identifier: data.id });

      if (user.length) {
        return callback(null, user[0]);
      } else {
        // create a new user if user with email was not found
        const newUser = new UserModel({
          identifier: data.id,
          full_name: data.displayName,
          email: data.emails[0].value,
          issuer: data.issuer,
        });

        await newUser.save().then((response) => {
          console.log(response);
          return callback(null, response);
        });
      }
    } catch (e: any) {
      throw new Error(e);
    }
  }
}
