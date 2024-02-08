const FormRegister = () => {
  return(
    <form className="user">
      <div className="form-group">
        <input type="text" className="form-control form-control-user py-4 rounded-pill" id="username" placeholder="Enter Your Username" autoComplete="off" autoFocus />
      </div>

      <div className="form-group">
        <input type="password" className="form-control form-control-user py-4 rounded-pill" id="password" placeholder="Enter Your Password" />
      </div>

      <button type="submit" className="btn btn-primary btn-user btn-block rounded-pill py-2 text-white">
        Submit
      </button>
    </form>
  );
}

export default FormRegister;