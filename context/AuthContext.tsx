import React from "react";
import firebase from "firebase/compat/app";
interface Props {
  user: firebase.User;
  loadingAuth: boolean;
}
export const AuthContext = React.createContext<Props | null>(null);
