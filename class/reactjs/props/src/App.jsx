import React from "react";
import child from "./child";
// import card from "./card";

const App = () => {
  // let name  = "Manish Kumar";
  const [name,setName] = useState("");
  return (
    <div>
      {/* <card full /> */}
      <child name={name} setName={setName}/>
    </div>
  );
};

export default App;