import jwt from "jsonwebtoken";
import User from "../models/User.js";

// const response = await fetch(`http://localhost:3000/api/books`, {
//   method: "POST",
//   body: JSON.stringify({
//     title,
//     caption
//   }),
//   headers: { Authorization: `Bearer ${token}` },
// });

const protectRoute = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    console.log("AUTH HEADER:", authHeader); // 👈 ADD THIS

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No or invalid token format" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return res.status(401).json({ message: "Token is not valid" });

    req.user = user;
    next();
  } catch (error) {
    console.error("JWT ERROR:", error.message);
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default protectRoute;