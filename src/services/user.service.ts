type User = { id: number; name: string; email: string };
const users: User[] = [];

export const userService = {
  createUser: (name: string, email: string) => {
    const user = { id: Date.now(), name, email };
    users.push(user);
    return user;
  },
  getAllUsers: () => users,
};
