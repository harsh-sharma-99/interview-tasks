import React, { useContext } from "react";
import { userFirstName, userLastName } from "../context";

const C = () => {
  const Fname = useContext(userFirstName);
  const Lname = useContext(userLastName);
  return (
    <div>
      <h1>
        My name is : {Fname} {Lname}
      </h1>
    </div>
  );
};

export default C;
