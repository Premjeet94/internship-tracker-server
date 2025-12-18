import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  const  authorization  =  req.headers?.authorization;
  if (!authorization || !authorization.startsWith("Bearer")) {
   return res.status(401).json({ message: "Not Authorized" });
  }
  try {
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token or token expired" });
  }
};
