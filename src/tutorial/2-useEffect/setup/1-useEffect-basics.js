import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('Running Use Effect');
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  });

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Here
      </button>
    </>
  );
};

export default UseEffectBasics;
