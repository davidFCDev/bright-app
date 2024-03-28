import React, { useState } from "react";

const SwitchInput = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="switch"
        checked={checked}
        onChange={handleToggle}
        className="toggle-switch"
      />
      <label htmlFor="switch" className="toggle-label"></label>
    </div>
  );
};

export default SwitchInput;
