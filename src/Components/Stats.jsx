import React, { useState, useEffect } from 'react'
import './Stats.css'
const Stats = ({tasks =[]}) => {
     const total = tasks.length;
  const completed = tasks.filter((t) => t.Status === "complete").length;
  const undo = tasks.filter((t) => t.Status === "undo").length;
  return (
    <div>
      <div className="distance">
                    <h1>📊 Stats: </h1>
                  <p>  Total Tasks:{total} </p>
                   <p> Complete Tasks:{completed} </p>
                   <p> Undo Tasks:{undo}</p>
                </div>
    </div>
  )
}

export default Stats
