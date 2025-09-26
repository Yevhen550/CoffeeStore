import React from "react";
import { UserContext } from "./userContext";
import { User } from "./types";

const initialUser: User = {
  name: "",
  email: "",
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(initialUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
