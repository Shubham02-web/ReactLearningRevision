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

import React from "react";
import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
    </div>
  );
};

export default App;
