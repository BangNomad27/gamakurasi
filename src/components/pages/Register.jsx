import FormRegister from "../elements/Fragments/FormRegister";
import Auth from "../elements/Layouts/Auth";

const Register = () => {
  return(
    <div className="fill-image">
      <Auth title="Enter Your Details">
        <FormRegister />
      </Auth>
    </div>
  );
}

export default Register;