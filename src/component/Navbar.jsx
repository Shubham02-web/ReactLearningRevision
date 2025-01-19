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

// import { useEffect } from "react";

// const Navbar = () => {
// useEffect(() => {
//   alert("hey i am render first");
// }, []);

// useEffect(() => {
//   alert("hey i am run when color was change");
// }, [color]);

// return <div>I am Navbar Of color hehe</div>;
// };

// export default Navbar;

// Use context API

// import { useContext } from "react";
// import { counterContext } from "../context/context";
// const Navbar = () => {
//   const value = useContext(counterContext);
//   return (
//     <div>
//       <h1>{value.count}</h1>
//       <button onClick={() => value.setCount((count) => count + 1)}>
//         Click me NAV
//       </button>
//     </div>
//   );
// };

// export default Navbar;
import { memo } from "react";
const Navbar = ({ adjective, getAdjective }) => {
  console.log("Navbar is render");
  return (
    <div>
      <p>Hey i am Adjective {adjective}</p>
      <button onClick={() => getAdjective()}>{getAdjective()}</button>
    </div>
  );
};

export default memo(Navbar);
