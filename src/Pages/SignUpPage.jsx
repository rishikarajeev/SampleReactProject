import React, { useState } from "react";
import Nav from "../Components/Header/Nav";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Nav />
      <div class="HomePage row  ">
        <div class="col"></div>
        <div className="width200 col mt-5 ">
          <form className="border  formcolor border-4 transalte-middle ">
            <div class="mb-3">
              <h2 class="text-white">Sign Up</h2>
              <label for="exampleInputEmail1" class="form-label text-white">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputFname" class="form-label text-white">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputFname"
                value={name}
                onChange={(e) => setName(e.target.value)}
              
              />
            </div>

            <div class="mb-3">
              <label
                for="exampleInputPassword1"
                class="form-label text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              >
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <a href="/">SignIn </a>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
}

export default SignUpPage;
