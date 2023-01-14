import { useState } from "react";
import { AdminNavBar } from "./AdminNavBar";
import { CustomerNavBar } from "./CustomerNavBar";

export const ShoopingLayout = ({ children }) => {

  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <div>
      {
        isAdmin
        ?<AdminNavBar />
        :<CustomerNavBar/>
      }
      <div>
      {children}
      </div>
    </div>
  );
};
