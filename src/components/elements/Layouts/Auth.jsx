const Auth = (props) => {
  const {title, children} = props;

  return(
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-7">
          <div className="card overflow-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg">
                  <div className="p-5">
                    <div className="text-center mb-4 text-secondary">
                      <h1 className="h1">
                        LOGO
                      </h1>
                      <span className="h4">{title}</span>
                    </div>

                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;