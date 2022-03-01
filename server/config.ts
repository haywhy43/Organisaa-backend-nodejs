import "dotenv/config";

export default {
  PORT: process.env.PORT as string,
  DB: process.env.DB_CONNECTION as string,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
};
