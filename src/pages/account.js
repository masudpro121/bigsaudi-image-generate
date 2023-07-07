import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./_app";
import withAuth from "@/HOCS/withAuth";
import { useCookies } from "react-cookie";

function Account() {
  const {user: { name, email },setUser} = useContext(MyContext);
  const [cookies, setCookie, removeCookie] = useCookies(["cookie"]);
  const [credit, setCredit] = useState()
  useEffect(()=>{
    fetch('/api/user')
    .then(res=>res.json())
    .then(res=>{
      setCredit(res.user.credit)
    })
  }, [])
  const handleLogout = () => {
    removeCookie("name");
    removeCookie("email");
    removeCookie("token");
    window.location.href = "/";
    setUser({});
  };
  return (
    <div className="flex justify-between mx-10 mt-2">
      {email && name && credit && (
        <>
          <div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Credit: {credit}</div>
          </div>
          <div>
            <button
              className="bg-red-400 px-3 rounded-sm text-sm py-1"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default withAuth(Account);
