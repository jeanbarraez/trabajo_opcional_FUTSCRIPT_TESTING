import { faker } from "@faker-js/faker";
import jwt from "jsonwebtoken";

const generateToken = () => {
  const username = faker.internet.userName();
  return jwt.sign(
    { username },
    process.env.JWT_SECRET /* {
    expiresIn: "1h",
  } */
  );
};

export { generateToken };
