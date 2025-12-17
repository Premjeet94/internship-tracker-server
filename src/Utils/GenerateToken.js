import jwt from "jsonwebtoken";

export const GenerateToken = async (userId) => {
  jwt.sign({ Id: userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
