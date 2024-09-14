
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [cnt, setCnt] = useState(0);

  function cntHandle() {
    setCnt(cnt + 1);
    // console.log("Button clicked");
    // alert("Button clicked");
    // Add your code here to handle button click event
    // For example, you can make API calls or update state based on button click event
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <p>Button clicked {cnt} times</p>
      <button onClick={cntHandle}>Click Me</button>
    </div>
  )
}

export default App
