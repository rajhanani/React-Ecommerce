import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Userdata } from "../redux/actions/action";

export const Login = () => {
  const [inputdata, setinputdata] = useState({
    email: " ",
  });

  const [mydata, setmydata] = useState("");

  console.log(mydata);

  let name, value;

  const handlelogin = (e) => {
    name = e.target.name;
    value = e.target.value;
    setinputdata([{ ...inputdata, [name]: value }]);
  };

  console.log(inputdata);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitlogin = () => {
    console.log(inputdata);
    const fond = mydata.find((element) => {
      console.log(element);

      return element.email === inputdata[0].email;
    });
    console.log(fond);

    if (fond.email == inputdata[0].email) {
      navigate("/products");
      dispatch(Userdata(fond));
      localStorage.setItem("myuserdata", JSON.stringify(fond));
    } else {
      alert("The user is not loged");
    }
  };

  useEffect(() => {
    alldata();
  }, []);

  function alldata() {
    try {
      axios.get("http://localhost:5000/posts").then((res) => {
        setmydata(res.data);
      });
      console.log(mydata);
    } catch {
      console.log(" something went wrong");
    }
  }

  return (
    <div id="main">
      <div className="sign">
        <h2>Login</h2>
      </div>

      <div className="form">
        <input
          type="email"
          className="input_filed"
          placeholder="Enter Email"
          name="email"
          onChange={handlelogin}
        ></input>
        <br></br>

        <button type="submit" onClick={submitlogin} className="btn-primary">
          LOGIN
        </button>
      </div>
    </div>
  );
};
