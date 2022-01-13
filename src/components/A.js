import React from "react";
import B from "./B";

const A = () => {
  return (
    <div>
      <B />
    </div>
  );
};

export default React.memo(A);
