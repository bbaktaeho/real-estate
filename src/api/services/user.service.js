import bcrypt from "bcrypt";
import User from "../../models/user.model";

const UserService = {
  register: async (userId, name, password, admin = 0) => {
    const salt = bcrypt.genSaltSync(11);
    const hashPw = bcrypt.hashSync(password, salt);
    return await User.insertUser(userId, name, hashPw, admin);
  },
};

export default UserService;
