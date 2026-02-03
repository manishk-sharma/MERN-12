import React, { useState, useEffect } from "react";

export default function App() {
const [count, setCount] = useState(0);
useEffect(() => {
if (count == 1) {
console. log("connected");

return () => {
console. log("disconnected");

}, [count] ) ;

Windsurf: Refactor | Explain | Generate JSDoc | x
const handleClick = () => {
setCount(count + 1);

return
<div>
<h1>Count: {count}</h1>
<button onClick={handleClick}>Change</button>
</div>
;
}
}
}, [count]);  