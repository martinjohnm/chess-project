



import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import express from "express"
import session from "express-session";
import { COOKIE_MAX_AGE } from "./consts";
import { initPassport } from "./passport";
import passport from "passport";
import cors from "cors"

const app = express();

configDotenv()

app.use(express.json())
app.use(cookieParser())
app.use(
  session({
    secret : process.env.COOKIE_SECRET || "johny mj",
    resave : false,
    saveUninitialized : false,
    cookie : { secure : false, maxAge : COOKIE_MAX_AGE}
})
);

initPassport();
app.use(passport.initialize());
app.use(passport.authenticate('session'));

const allowedHosts = process.env.ALLOWED_HOSTS
  ? process.env.ALLOWED_HOSTS.split(',')
  : [];

app.use(
  cors({
    origin: allowedHosts,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  }),
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

