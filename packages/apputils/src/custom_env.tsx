import React, { useState } from 'react';

function CustomEnv() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>React Form with Two Inputs</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="env_name"
            value=""
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Value:
          <input
            type="text"
            name="env_value"
            value="env_name"
            onChange={handleChange}
          />
        </label>
        <br />
      </form>
    </div>
  );
}

export default CustomEnv;
