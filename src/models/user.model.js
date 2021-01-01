import { executeQuery } from "./pool";

const User = {
  getUserById: async (id) => {
    const query = "SELECT * FROM user WHERE id = ?;";
    const [user] = await executeQuery(query, [id]);
  },
  getUserByUserId: async (userId) => {
    const query = "SELECT * FROM user WHERE user_id = ?;";
    const [user] = await executeQuery(query, [userId]);
    return user;
  },
  insertUser: async (userId, name, hashPw, admin) => {
    const query = "INSERT INTO user (user_id, name, password, admin) VALUES (?, ?, ?, ?);";
    return await executeQuery(query, [userId, name, hashPw, admin]);
  },
};

export default User;
