import { useState } from "react";

export default function RegisterPage() {
  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");

  async function register(event) {
    event.preventDefault();
    try {
      await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (error) {
      console.log("error on posting data from the front end", error);
    }
  }
  return (
    <>
      <div className="form-ultimate-container">
        <div className="form-container">
          <div className="heading">
            <h3>Create account</h3>
          </div>
          <div className="form-content">
            <form className="form" onSubmit={register}>
              <input
                type="text"
                placeholder="Username..."
                value={username}
                onChange={(event) => {
                  changeUsername(event.target.value);
                }}
              />
              <input
                type="password"
                placeholder="password..."
                value={password}
                onChange={(event) => {
                  changePassword(event.target.value);
                }}
              />
              <button type="submit">create account</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
