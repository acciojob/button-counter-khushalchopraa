
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [cnt, setCnt] = useState(0)

  function handleClick() {
    setCnt(cnt + 1)
  }
  return (
    <div>
      {/* Do not remove the main div */}
      Button clicked {cnt} times
      <br />
      <br />
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default App
