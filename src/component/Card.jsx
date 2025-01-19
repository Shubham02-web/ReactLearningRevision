import "./Card.css";
import { counterContext } from "../context/context.jsx";
import Navbar from "./Navbar.jsx";
import { useContext } from "react";
const Card = () => {
  const value = useContext(counterContext);
  return (
    // <div className="Card" style={{ overflow: "hidden" }}>
    //   <img
    //     src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283"
    //     alt=""
    //     width={244}
    //     style={{ border: "2px solid black" }}
    //   ></img>
    //   <h1>{props.title}</h1>
    //   <p>{props.description}</p>
    // </div>
    // Use Context
    <>
      <Navbar />
      <h1>{value.count}</h1>
    </>
  );
};

export default Card;
