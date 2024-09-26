import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./RegisterLogin.module.css";
import ProductsProvider from "../../context/ProductsProvider";
import closeEye from "../../assets/images/eye-close.png";
import opneEye from "../../assets/images/eye-open.png";

const RegisterLogin = () => {
  const [showPassRegister, setshowPassRegister] = useState(true);
  const [pushname, setpushname] = useState("");
  const [pushemail, setpushemail] = useState("");
  const [pushpassword, setpushpassword] = useState("");
  /////////////////for login\\\\\\\\\\\\\\\
  const [showPassLogin, setshowPassLogin] = useState(true);
  const [getName, setgetName] = useState("");
  const [getPass, setgetPass] = useState("");

  const { Users, setisAdmin, setNameAdmin, setrender } =
    useContext(ProductsProvider);
  const goAdmin = useNavigate();
  const PostUser = async () => {
    if (pushname && pushemail && pushpassword) {
      if (!pushemail.includes("@gmail.com" || "@yahoo.com")) {
        Swal.fire({
          icon: "error",
          title: "◔◡◔",
          text: "Please enter a valid email address!",
          showConfirmButton: false,
        });
      } else if (pushpassword.length < 8) {
        Swal.fire({
          icon: "error",
          title: "◔◡◔",
          text: "  Password must be at least 8 characters long!",
          showConfirmButton: false,
        });
      } else if (Users.find((data) => data.email == pushemail)) {
        Swal.fire({
          title: "This email is already exist !",
          icon: "question",
        });
      } else if (Users.find((data) => data.username == pushname)) {
        Swal.fire({
          title: "This Username is already exist !",
          icon: "question",
        });
      } else {
        axios.post("http://localhost:3000/Users", {
          username: `${pushname}`,
          email: `${pushemail}`,
          password: `${pushpassword}`,
        });
        setrender((item) => item + 1);
        Swal.fire({
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    }
  };
  const findUsers = async () => {
    if (!Users.find((data) => data.username == getName)) {
      Swal.fire({
        icon: "error",
        title: "◔◡◔",
        text: "Please enter user!",
        showConfirmButton: false,
      });
    } else {
      const user = Users.find((data) => data.username == getName);
      if (user) {
        if (user.password == getPass) {
          Swal.fire({
            icon: "success",
            title: "Login was successful !",
            showConfirmButton: false,
            timer: 1000,
          });
          setisAdmin(true);
          setNameAdmin(getName);
          goAdmin("/Admin");
        } else {
          console.log("sag");
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "◔◡◔",
          text: "Please enter user!",
          showConfirmButton: false,
        });
      }
    }
  };
  return (
    <div className={styles.RegisterLoginBox}>
      <div className={`${styles.formBox} ${styles.loginBox}`}>
        <h2>Login</h2>
        <form>
          <input
            onChange={(e) => setgetName(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <label htmlFor="">
            <input
              onChange={(e) => setgetPass(e.target.value)}
              type={showPassLogin ? "password" : "text"}
              placeholder="Password"
            />
            <img
              src={showPassLogin ? closeEye : opneEye}
              onClick={() => setshowPassLogin((prev) => (prev = !prev))}
            />
          </label>

          <button onClick={findUsers} type="button">
            Login
          </button>
        </form>
      </div>
      <div className={`${styles.formBox} ${styles.registerBox}`}>
        <h2>Register</h2>
        <form>
          <input
            onChange={(e) => setpushname(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(e) => setpushemail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <label htmlFor="">
            <input
              onChange={(e) => setpushpassword(e.target.value)}
              type={showPassRegister ? "password" : "text"}
              placeholder="Password"
            />
            <img
              src={showPassRegister ? closeEye : opneEye}
              onClick={() => setshowPassRegister((prev) => (prev = !prev))}
            />
          </label>
          <button onClick={PostUser} type="button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterLogin;
