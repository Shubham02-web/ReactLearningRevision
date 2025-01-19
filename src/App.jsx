/* eslint-disable no-unused-vars */
// import Card from "./component/Card.jsx";
// import "./index.css";
// import Footer from "./component/Footer.jsx";
// import Navbar from "./component/Navbar.jsx";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="card-com">
//         <Card title="Block1" description="Block 1 Descrption" />
//         <Card title="Block2" description="Block 2 Descrption" />
//         <Card title="Block3" description="Block 3 Descrption" />
//         <Card title="Block4" description="Block 4 Descrption" />
//         <Card title="Block5" description="Block 5 Descrption" />
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;

// State and Hooks in REACT

// import React from "react";
// import { useState } from "react";
// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <div>{count}</div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Update Count
//       </button>
//     </div>
//   );
// };

// export default App;
// import { useState, useEffect } from "react";
// // import Navbar from "./component/Navbar";

// const App = () => {
//   const [value, setValue] = useState(0);
//   const [color, setColor] = useState(0);
//   // const [first, setFirst] = useState(0);

//   useEffect(() => {
//     alert("hey i am render on every rendering");
//   });
//   useEffect(() => {
//     alert("i am render when value/count change");
//     setColor(color + 1);
//   }, [value]);
//   useEffect(() => {
//     alert("hey i am render first");
//   }, []);

//   useEffect(() => {
//     alert("hey i am run when color was change");
//   }, [color]);

//   return (
//     <div>
//       {/* <Navbar color={"blue" + color} /> */}
//       <button
//         onClick={() => {
//           setValue(value + 1);
//         }}
//       >
//         Count is {value}
//       </button>
//     </div>
//   );
// };

// export default App;

// Learning useRef in React

// import { useState, useRef, useEffect } from "react";
// import "./App.css";

// const App = () => {
//   const [count, setcount] = useState(0);
//   const btnRef = useRef();
//   useEffect(() => {
//     console.log("first rendering.....");
//     btnRef.current.style.backgroundColor = "red";
//   }, []);
//   return (
//     <div>
//       <p>Count is {count}</p>
//       <button
//         ref={btnRef}
//         onClick={() => {
//           setcount(count + 1);
//         }}
//       >
//         Click Me
//       </button>
//       <button onClick={() => (btnRef.current.style.display = "none")}>
//         Change ME
//       </button>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";
// import Todo from "./Todo";
// const App = () => {
//   const [showBtn, setShowBtn] = useState(false);
//   const [todo, setTodo] = useState([
//     {
//       title: "hey",
//       description: `I am first Todo With Key hey`,
//     },
//     {
//       title: "hello",
//       description: `I am second Todo With Key hello`,
//     },
//     {
//       title: "bye",
//       description: `I am Last Todo with key bye`,
//     },
//   ]);
//   return (
//     <div>
//       {showBtn ? (
//         <button> Show Btn Is True </button>
//       ) : (
//         <button>Show Btn is False</button>
//       )}
//       {/* {showBtn && <button>Show Btn Is True</button>} */}
//       {todo.map((todo) => {
//         // return <Todo key={todo.title} todo={todo} />;
//         return (
//           <div key={todo.title}>
//             <p>title:{todo.title}</p>
//             <p>desc:{todo.description}</p>
//           </div>
//         );
//       })}
//       <button onClick={() => setShowBtn(!showBtn)}>change Me </button>
//     </div>
//   );
// };

// export default App;

// Event Handling in React JS

// import { useState } from "react";
// const App = () => {
//   // const [name, setNaame] = useState("Shubham");
//   const [form, setForm] = useState({});

//   const handleChange = (e) => {
//     // setNaame(e.target.value)
//     setForm({ ...form, [e.target.name]: [e.target.value] });
//     console.log(form);
//   };
//   const handleClick = () => {
//     alert("Hey i am handle click event ");
//   };
//   const handleMouseOver = () => {
//     alert("hey i am handle Mouse Over Function In React");
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>click me</button>
//       <button onMouseOver={handleMouseOver}>mouse over me </button>
//       <input
//         type="text"
//         name="phone"
//         value={form.phone ? form.phone : ""}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="email"
//         value={form.email ? form.email : ""}
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

// export default App;

// import Navbar from "./component/Navbar.jsx";
// import Card from "./component/Card.jsx";
// import Footer from "./component/Footer.jsx";
// import User from "./component/User.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Navbar />,
//     },
//     {
//       path: "/Card",
//       element: <Card />,
//     },
//     {
//       path: "/Footer",
//       element: <Footer />,
//     },
//     {
//       path: "user/:username",
//       element: <User />,
//     },
//   ]);
//   return <RouterProvider router={router}></RouterProvider>;
// };

// export default App;

// Context in React

// import { useState } from "react";
// import { counterContext } from "./context/context.jsx";
// import Navbar from "./component/Navbar.jsx";
// import Card from "./component/Card.jsx";

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <counterContext.Provider value={{ count, setCount }}>
//         <Navbar />
//         <Card />
//         <div>{count}</div>

//         <button onClick={() => setCount(() => count + 1)}>Click me</button>
//       </counterContext.Provider>
//     </div>
//   );
// };

// export default App;

// useMemo in React

// import { useState, useMemo } from "react";
// const nums = new Array(30_000_000).fill(0).map((_, i) => {
//   return {
//     index: i,
//     magic: i === 29_000_000,
//   };
// });
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [numbers, setNumbers] = useState(nums);
//   const magical = useMemo(
//     () => numbers.find((item) => item.magic === true),
//     [numbers]
//   );
//   return (
//     <div>
//       <span>magical Number is : {magical.index}</span>
//       <p>{count}</p>
//       <button
//         onClick={() => {
//           setCount((count) => count + 1);
//           if (count == 10) {
//             setNumbers(
//               new Array(20_000_000).fill(0).map((_, i) => {
//                 return {
//                   index: i,
//                   magic: i === 8_000_000,
//                 };
//               })
//             );
//           }
//         }}
//       >
//         click me
//       </button>
//     </div>
//   );
// };

// export default App;

// useCallBack in React

import { useCallback, useState } from "react";
import Navbar from "./component/Navbar";
const App = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const [adjective, setAdjective] = useState("yeah");

  // const getAdjective = () => {
  //   return "another" + count;
  // };
  const getAdjective = useCallback(() => {
    return "another" + count;
  }, [count]);
  return (
    <div>
      <Navbar adjective={"good"} getAdjective={getAdjective} />
      <h1>hey i am{count}</h1>
      <button onClick={() => setCount(() => count + 1)}>click me count</button>
      <button onClick={() => setValue(() => value + 1)}>click me value</button>
    </div>
  );
};

export default App;
