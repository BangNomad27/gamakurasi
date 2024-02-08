import FormLogin from "../elements/Fragments/FormLogin";
import Auth from "../elements/Layouts/Auth";

const Login = () => {
  return(
    <div className="fill-image">
      <Auth title="Welcome Back!">
        <FormLogin />
      </Auth>
    </div>
  );
}

export default Login;