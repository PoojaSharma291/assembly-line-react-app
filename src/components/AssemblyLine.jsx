import React, { useState, useEffect } from "react";

function AssemblyLine({ stages }) {
  const [inputText, setInputText] = useState('');
  const [stagesArr, setStagesArr] = useState([]);
  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      // Add code for unshifting to first element of list 
      let update = [...stagesArr];
      update[0].unshift(inputText);
      setStagesArr(update);
      setInputText('');
      //event.target.value = '';
      console.log(stagesArr);
    }
  }

  const keyEnter = (e) => {
    setInputText(e.target.value);
    //event.target.value = '';
  }

  const moveBack = (task, index, taskIndex) => {
    let updated = [...stagesArr];
    updated[index].splice(taskIndex, 1);
    if (index != 0) {
      updated[index - 1].push(task);
    }
    console.log(updated);
    setStagesArr(updated);
  }

  const moveNext = (task, index, taskIndex) => {
    let updated = [...stagesArr];
    updated[index].splice(taskIndex, 1);
    if (index < stagesArr.length - 1) {
      updated[index + 1].unshift(task);
    }
    console.log(updated);
    setStagesArr(updated);
  }


  useEffect(() => {
    // Push empty arrays on Load of Component depending upon stages
    let x = stagesArr;
    for (let i = 0; i < stages.length; i++) {
      x[i] = [];
    }
    setStagesArr(x);
  }, []);

  return (
    <div>
      <div>
        <label> Add an item :
          <input type="text" name="item" data-test="assembly-add-item" className="assembly-add-item" value={inputText} onChange={keyEnter} onKeyPress={handleKeyUp} />
        </label>
      </div>
      {stages.map((stage, index) =>
        <div className="assembly-stage" data-test="assembly-stage">
          <span key={stage + index}>{stage}</span>


          {stagesArr[index] && stagesArr[index].map((task, idx) =>
            <button key={task + idx} data-test="assembly-item" className="assembly-item"
              onContextMenu={() => moveBack(task, index, idx)}
              onClick={() => moveNext(task, index, idx)}>{task}</button>
          )}

        </div>
      )}


    </div>
  );

}

export default AssemblyLine;