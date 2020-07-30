import React from "react";

function FormField({ label, type='text', value, onChange }) {
  return (
    <>
      <label>
        {label}
        <input
          type={type}
          name="name"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}

export default FormField;
