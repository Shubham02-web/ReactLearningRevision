/* eslint-disable react/prop-types */
// import "./Navbar.css";
// const Navbar = (props) => {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//         </ul>
//       </nav>
//       {/* eslint-disable-next-line react/prop-types */}
//       {props.TextNav}
//     </div>
//   );
// };

// export default Navbar;

import { useEffect } from "react";

const Navbar = ({ color }) => {
  useEffect(() => {
    alert("hey i am render first");
  }, []);

  useEffect(() => {
    alert("hey i am run when color was change");
  }, [color]);

  return <div>I am Navbar Of {color}color hehe</div>;
};

export default Navbar;
