import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json("No Token");

  try {
    const decoded = jwt.verify(token, "secret123");
    req.user = decoded;
    next();
  } catch {
    res.status(401).json("Invalid Token");
  }
};
