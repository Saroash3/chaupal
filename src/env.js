// Loads variables from the .env file into process.env.
// Imported FIRST in server.js so every other file can read them.
// (On Render there is no .env file: variables come from the dashboard.)
import dotenv from "dotenv";
dotenv.config({ path: [".env.local", ".env"], quiet: true }); // .env.local is written by `neon deploy`
