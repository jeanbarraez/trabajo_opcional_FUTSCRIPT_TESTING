
  import jwt from "jsonwebtoken";

  const createToken = () => {
    const token = jwt.sign({}, process.env.JWT_SECRET,/*  { expireIn: "1h" } */);
    return token;
  };
  
  const admin = {
    username: "admin",
    password: "1234",
  };
  
  const loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    if (username == admin.username && password == admin.password) {
      const token = createToken();
      res.status(200).send({ token });
    } else res.status(400).send("Credenciales incorrectas");
  };
  
  export { loginAdmin };
  
