import jwt from "jsonwebtoken";

export const GenerateToken =  (userId) => {
   return jwt.sign({ Id: userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
