import { Outlet, Link } from "react-router-dom";

const navpar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/blogs"></Link>
          </li>
          */}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default navpar;