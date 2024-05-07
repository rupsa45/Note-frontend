import { useState, useEffect } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import PropTypes from "prop-types";
import LoadingIndicator from "./LoadingIndicator";
import { Link } from "react-router-dom";
function Form({ route, method }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  // const [username,setUsername]=useState("")
  // const [password,setPassword]=useState("")
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, {
        username: user.username,
        password: user.password,
      });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm  mx-auto card bg-base-300 my-20"
    >
      <div className="card-body">
        <h1 className="text-center text-slate-200 text-2xl font-serif">
          {name}
        </h1>

        <input
          className="input input-bordered w-full max-w-xs my-6"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />

        <input
          className="input input-bordered w-full max-w-xs my-2"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />


        {loading && <LoadingIndicator />}


        <button
          className="btn btn-primary mt-2 w-full mb-2 text-lg font-bold font-serif"
          type="submit"
          disabled={buttonDisabled}
        >
          {name}
        </button>



        <div className='text-center'>
          <Link to={name === "Login" ? "/register" : "/login"}>
            Access the{" "}
            <span className="text-blue-500 underline">
              {name === "Login" ? "register" : "login"}
            </span>{" "}
            area
          </Link>
        </div>

        
      </div>

    </form>
  );
}

Form.propTypes = {
  route: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default Form;
