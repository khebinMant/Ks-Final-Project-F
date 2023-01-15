import { useState } from "react";
import { useSelector } from "react-redux";
import { AdminNavBar } from "./AdminNavBar";
import { CustomerNavBar } from "./CustomerNavBar";

export const ShoopingLayout = ({ children }) => {

  const [isAdmin, setIsAdmin] = useState(false)

  const currentUser = useSelector((state) => state.users.currentUser);

  return (
    <div>
      {
        currentUser.role==="ADMIN"
        ?<AdminNavBar />
        :<CustomerNavBar/>
      }
      <div>
      {children}
      </div>
    </div>
  );
};
