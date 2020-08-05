import { useState } from 'react';

function useForm(initialValues) {
    const [formValues, setValues] = useState(initialValues);
  
    function setValue(key, value) {
      setValues({ ...formValues, [key]: value });
    }
  
    function handleInputChange(event) {
      const { value } = event.target;
      setValue(event.target.getAttribute('name'), value);
    }
  
    function clearForm() {
      setValues({initialValues});
    }
  
  
    return {
      clearForm,
      formValues,
      handleInputChange
    };
}

export default useForm;