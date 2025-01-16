import "./Navbar.css";
const Navbar = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      {/* eslint-disable-next-line react/prop-types */}
      {props.TextNav}
    </div>
  );
};

export default Navbar;
