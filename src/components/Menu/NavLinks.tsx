import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { database } from '../loginData/FirebaseConfig';
import { useNavigate } from "react-router-dom";

const links = [
  {
    name: "All tasks",
    path: "tasks/alltask",
  },
  {
    name: "Important tasks",
    path: "tasks/important",
  },
];

const NavLinks: React.FC<{ classActive: string }> = ({ classActive }) => {
  const route = useLocation();
  const currentPath = route.pathname;


  const history = useNavigate();

  const handleClick = () => {
    signOut(database).then(val => {
      console.log(val, "val")
      history('/')
    })
  }


  return (
    <nav>
      <ul className="grid gap-2">
        {links.map((link) => (
          <li key={link.path} >
            <NavLink
              to={link.path}
              className={`relative px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200 ${currentPath === link.path ? `${classActive} bg-[hsl(233, 36%, 38%)]` : ""}`}
            >
              {link.name}
            </NavLink>
            <button onClick={handleClick} style={{ backgroundColor: "#3E4684", color: "white", padding: ".75em", borderRadius: "9px", position: 'absolute', bottom: '10px', left: '50px' }}>SignOut</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
