import { useEffect, useRef } from "react";
import { getCategoriesAPI, loginAPI } from "./api";

function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {
    const loginData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    loginAPI(loginData).then((res) => {
      console.log(res);
      localStorage.setItem("token", res.access);
    });
  };

  useEffect(() => {
    getCategoriesAPI().then((res) => console.log(res));
  }, []);
  return (
    <main>
      <h1>Hello world</h1>
      <input type="text" ref={usernameRef} placeholder="username" />
      <input type="text" ref={passwordRef} placeholder="password" />
      <button onClick={handleLogin}>login</button>
    </main>
  );
}

export default App;
