import User from "../models/user-schema.js";

export const userSignup = async (request, response) => {
    try {
        // Check if email already exists (instead of username)
        const exist = await User.findOne({ email: request.body.email });
        if (exist) {
            return response.status(401).json({ message: "Email already exists" });
        }

        const user = request.body;
        const newUser = new User(user);
        await newUser.save();

        response.status(200).json({ message: "Signup successful!", data: newUser });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};


export const userLogin = async (request, response) => {
        try {
            const { email, password } = request.body;
    
            let user = await User.findOne({ email, password });
            if (user) {
                return response.status(200).json({ data: user });
            } else {
                return response.status(401).json({ message: "Invalid Login" });
            }
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    };
    