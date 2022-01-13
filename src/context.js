import { createContext, memo } from "react";

export const userFirstName = createContext();
export const userLastName = createContext();

const FirstNameContext = memo(userFirstName.Provider);
const LastNameContext = memo(userLastName.Provider);
export { FirstNameContext, LastNameContext };
