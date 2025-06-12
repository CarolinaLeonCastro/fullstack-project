import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// APRÈS — avec .js
import { USER_ROLES, User } from '../../ressources/user/user.model.js';


export const register = async (req, res, next) => {
    try {
        const { email,password  } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
    
    
        const user = await User.create({ email, password:hashedPassword, role: USER_ROLES.USER });
        // un token JWT
        const token = jwt.sign(
            { sub: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );
    
    
        res.status(201).json({ ...user, password: undefined, token });

    } catch (error) {
       next(error);
    }};

export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
};
