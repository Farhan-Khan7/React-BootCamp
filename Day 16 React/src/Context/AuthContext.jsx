import { useState , createContext} from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [regiserUser, setRegisterUser] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Auth.Provider
      value={{ 
        regiserUser,
        setRegisterUser,
        loggedInUser,
        setLoggedInUser 
    }}
    >
      {children}
    </Auth.Provider>
  );
};
