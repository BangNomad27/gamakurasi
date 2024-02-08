import Sidebar from "../../pages/Sidebar";
import Topbar from "../../pages/Topbar";

const Home = (props) => {
  const {children} = props;

  return(
    <div id="wrapper">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="main-content">
          <div id="content">
            <Topbar />

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;