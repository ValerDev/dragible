import React, { useState, useEffect, useRef } from "react";
import "./App.sass";
const App = () => {
  let leftRangeVal = useRef(null)
  let rightRangeVal = useRef(null)
  
  
  let [rightRange, setRightRange] = useState(0)
  let [leftRange, setLeftRange] = useState(0)
  
  
  
  
  useEffect(() => {
    setRightRange((prev) => {
     return prev = rightRangeVal.current.clientWidth
    })
    setLeftRange((prev) => {
      return prev = leftRangeVal.current.clientWidth
    })
  }, [])
  
  const dragLeft = (e) => {
    return leftRangeVal.current.clientWidth = leftRange--
  }
  
  const dragRight = () => {
    console.log(rightRange)
  }
  
  // window.addEventListener("mousemove", dragLeft)
  return (
    <div id="App">
      <div className="content">
        <div className="range">
          <div className='rangeValue' ref={leftRangeVal} draggable onDrag={dragLeft}>
            <div className='arrow left'></div>
          </div>
          <div className='rangeValue' ref={rightRangeVal} draggable onDrag={dragRight}>
            <div className='arrow right'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;