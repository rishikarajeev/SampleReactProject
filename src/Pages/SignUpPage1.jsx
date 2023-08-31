import React, { useState,useEffect } from "react";
import Nav from "../Components/Header/Nav";
import { useNavigate } from "react-router-dom";

function SignUpPage1() {
  const [data, setData] = useState({});  
  const [UserDetails, setDetails] = useState(localStorage.getItem('ProfileData')||[]);   //use state in functional components[returns array with2 items state and data]
  const navigate=useNavigate();
 
  console.log(">>UserDetails"+JSON.stringify(UserDetails));
  console.log(">>data"+JSON.stringify(data));
  
  const UpdateData=(e)=>{
     const {name,value}=e.target
     setData({...data,[name]:value}) //spread operator...to keep already used data
    }
    const SubmitDetails=(e)=>{
      e.preventDefault();
      
      setDetails([...UserDetails,data]); //spread operator...to keep already used data
      console.log("profile data"+localStorage.getItem('ProfileData'));
      if(localStorage.getItem('ProfileData').length==0)
      {
        console.log("Empty list");
      }else{
        console.log("Navigate to profile");
      }
      
     
    }


    useEffect(()=>
    {
      localStorage.setItem('ProfileData',JSON.stringify(data));  //hook to use CRUD operations
    },
    [UserDetails] //dependency array
    )

    
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
                name="email"
                onChange={UpdateData}
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
                name="name"
                onChange={UpdateData}
              
              />
            </div>

            <div class="mb-3">
              <label
                for="exampleInputPassword1"
                class="form-label text-white"
                
              >
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={UpdateData}
              />
            </div>
            <a href="/">SignIn </a>
            <input type="submit" value="submit" class="btn btn-primary" onClick={SubmitDetails}/>
     
      
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
}

export default SignUpPage1;
