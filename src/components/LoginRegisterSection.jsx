import "./LoginRegisterSection.css";

const LoginRegisterSection = () => {
  return (
    <div className="login-register-container">
      <h2>Join Us!</h2>
      <div className="login-register-buttons">
        <a href="/login">
          <button>Login</button>
        </a>
        <a href="/register">
          <button>Register</button>
        </a>
      </div>
    </div>
  );
};

export default LoginRegisterSection;
