import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Scaffold from '../../../components/Scaffold';
import FormField from '../../../components/FormField';

function CategoryForm() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([]);
  const [formValues, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({ ...formValues, [key]: value });
  }

  function handleInputChange(event) {
    const { value } = event.target;
    setValue(event.target.getAttribute('name'), value);
  }

  function handleSubmitEvent(event) {
    event.preventDefault();
    setCategories([...categories, formValues]);
    setValues(initialValues);
  }

  return (
    <Scaffold>
      <h1>Cadastro de Categoria: {formValues.name} </h1>

      <form onSubmit={handleSubmitEvent}>
        <FormField name='name' label='Nome' value={formValues.name} onChange={handleInputChange} />

        <FormField name='description' label='Descrição' type="textarea" value={formValues.description} onChange={handleInputChange} />

        <FormField name='color' label='Cor' type='color' value={formValues.color} onChange={handleInputChange} />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return <li key={`${category.name}${index}`}>{category.name}</li>;
        })}
      </ul>

      <Link to='/'>Ir para Home</Link>
    </Scaffold>
  );
}

export default CategoryForm;
