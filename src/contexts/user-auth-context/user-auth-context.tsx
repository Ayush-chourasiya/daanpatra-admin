import React, {
  createContext,
  ReactChild,
  ReactChildren,
  useEffect,
  useState,
} from "react";
import {
  useHistory,
  withRouter,
  useLocation,
  Redirect,
} from "react-router-dom";
import { signin } from "../../config/ApiHandler";
import { ILoginParams } from "../../types/user-auth-types";

type authContextProps = {
  authErrMsg: string | null;
  setAuthErrMsg: (authErrMsg: string) => void;
  currentUser: { id: string; token: string } | null;
  setCurrentUser: (currentUser: { id: string; token: string }) => void;
  login: (params: ILoginParams) => void;
};
export const authContext = createContext<authContextProps>({
  authErrMsg: null,
  setAuthErrMsg: () => undefined,
  currentUser: null,
  setCurrentUser: () => undefined,
  login: () => undefined,
});
interface AuthProviderProps {
  children: ReactChild | ReactChildren;
}
const AuthProvider = (props: AuthProviderProps) => {
  const [authErrMsg, setAuthErrMsg] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<{
    id: string;
    token: string;
  } | null>(null);
  

  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (currentUser) {
      <Redirect to="/dasboard" />;
    } else {
      <Redirect to="/" />;
    }
  }, [location]);
  const login = (params: ILoginParams) => {
    signin(
      params.userName,
      params.password,
      (user) => {
        setCurrentUser(user);
        sessionStorage.setItem("userId", user.id);
        sessionStorage.setItem("token", user.token);
        history.push("/dashboard");
      },
      (error) => {setAuthErrMsg(error.msg); }
    );
  };
  const value = {
    authErrMsg,
    setAuthErrMsg,
    currentUser,
    setCurrentUser,
    login,
  };
  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default withRouter(AuthProvider);
