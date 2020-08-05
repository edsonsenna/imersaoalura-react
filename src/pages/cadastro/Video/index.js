import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import FormField from '../../../components/FormField';
import Scaffold from '../../../components/Scaffold';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';
import videosRepository from '../../../repositories/videos';

function VideoForm() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const { formValues, handleInputChange } = useForm({
    title: 'Default Title',
    url: 'https://www.youtube.com/watch?v=ATq6jMgkOl4',
    categoryId: 1,
  });

  useEffect(() => {
    categoriesRepository.getAll().then((categories) => {
      setCategories(categories);
    });
  }, []);

  function handleSubmitEvent(event) {
    event.preventDefault();

    const categoryId = categories.find((category) => category.id === formValues.categoryId).id;

    videosRepository
      .create({
        title: formValues.title,
        url: formValues.url,
        categoryId
      })
      .then(() => {
        history.push('/');
      });
  }

  return (
    <Scaffold>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleSubmitEvent}>
        <FormField
          name='title'
          label='Titulo'
          value={formValues.title}
          onChange={handleInputChange}
        />

        <FormField
          name='url'
          label='Url'
          value={formValues.url}
          onChange={handleInputChange}
        />

        <FormField
          name='category'
          label='Categoria'
          value={formValues.category}
          suggestions={[...categories.map(category => category.title)]}
          onChange={handleInputChange}
        />

        <button>Cadastrar</button>
      </form>

      <Link to='/create/category'>Criar Categoria</Link>
    </Scaffold>
  );
}

export default VideoForm;
