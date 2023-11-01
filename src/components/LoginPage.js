import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");
  const [redirect, changeRedirect] = useState(false);

  async function handleLoginSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        changeRedirect(true);
      } else {
        alert("Failed to login!!");
      }
    } catch (error) {
      console.log("error on login", error);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div>
        <div className="form-container">
          <div className="heading">
            <h3>Log In</h3>
          </div>
          <div className="form-content">
            <form
              className="form"
              onSubmit={(event) => {
                handleLoginSubmit(event);
              }}
            >
              <input
                type="text"
                value={username}
                placeholder="Username..."
                onChange={(event) => {
                  changeUsername(event.target.value);
                }}
              />
              <input
                type="password"
                value={password}
                placeholder="password..."
                onChange={(event) => {
                  changePassword(event.target.value);
                }}
              />
              <button type="submit">continue</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
