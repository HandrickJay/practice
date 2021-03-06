

import { useEffect, useState } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  useEffect (() => {
    console.log("I run onece")
  },[]);
  useEffect (() => {
    console.log("I run when 'keyword' changes")
  },[keyword]);
  useEffect (() => {
    console.log("I run when 'counter' changes")
  },[counter]); 
  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange}
      type="text"
      placeholder="Search here..." />
      
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
