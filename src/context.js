import { createContext } from "react";

export const userFirstName = createContext();
export const userLastName = createContext();

const FirstNameContext = userFirstName.Provider;
const LastNameContext = userLastName.Provider;
export { FirstNameContext, LastNameContext };
