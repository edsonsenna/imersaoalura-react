import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Scaffold from '../../../components/Scaffold';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import config from '../../../config';


function CategoryForm() {
  const initialValues = {
    title: '',
    description: '',
    color: '#000000',
  };
  const [categories, setCategories] = useState([]);

  const { formValues, handleInputChange, clearForm } = useForm(initialValues);

  function handleSubmitEvent(event) {
    event.preventDefault();
    setCategories([...categories, formValues]);
    clearForm();
  }

  useEffect(() => {
  
    fetch(config.API_URL + 'categories')
    .then(async (response) => {
      const parsedResponse = await response.json();
      setCategories(parsedResponse);
    });

  }, [])

  return (
    <Scaffold>
      <h1>Cadastro de Categoria: {formValues.title} </h1>

      <form onSubmit={handleSubmitEvent}>
        <FormField name='title' label='Titulo' value={formValues.title} onChange={handleInputChange} />

        <FormField name='description' label='Descrição' type="textarea" value={formValues.description} onChange={handleInputChange} />

        <FormField name='color' label='Cor' type='color' value={formValues.color} onChange={handleInputChange} />

        <button>Cadastrar</button>
      </form>


      {
        !categories.length && <div>Loading...</div>
      }

      
      <ul>
        {categories.map((category, index) => {
          return <li key={`${category.title}${index}`}>{category.title}</li>;
        })}
      </ul>
        
      

      <Link to='/'>Ir para Home</Link>
    </Scaffold>
  );
}

export default CategoryForm;
