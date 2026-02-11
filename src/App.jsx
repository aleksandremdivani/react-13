import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import { Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
 const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      const accessToken = response.data.accessToken;
      setToken(accessToken);
      localStorage.setItem("token", accessToken);

      const res = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUser(res.data);
      navigate("/")
      setPassword("");
      setUsername("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token");
    setToken(null);
    setToken(null);
    setUser(null);
  };
  useEffect(() => {
    const restoreSession = async () => {
      const savedToken = localStorage.getItem("token");
      if (!savedToken) return;
      setToken(savedToken);

      try {
        const res = await axios.get("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        });
        setUser(res.data);
        console.log(res.data);
      } catch (error) {}
    };
    restoreSession();
  }, []);
  return (
    <>
      <Header user={user} handleLogOut={handleLogout} />

      <Routes>
        <Route path="/" element={<Home user={user} />} />
        {!user && (
          <Route
            path="/login"
            element={
              <Login
                handleSubmit={handleSubmit}
                password={password}
                setPassword={setPassword}
                username={username}
                setUsername={setUsername}
              />
            }
          />
        )}
      </Routes>
    </>
  );
}

export default App;
