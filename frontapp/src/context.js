//context.js : 전역적으로 상태를 공유할 수 있도록 도와주는 스크립트
import { createContext } from "react";

let login = { userid: "홍길동", isLogin: true };
export const loginContext = createContext(login);