import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/marvel", {
      replace: true,
    });
  };
  return (
    <>
      <div className="container my-2 m-auto">
        <h1>Login</h1>
        <hr />
        <button onClick={onLogin} className="btn btn-primary p-1">
          Login
        </button>
      </div>
    </>
  );
};
