import React from 'react';
import Scaffold from '../../../components/Scaffold';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import videosRepository from '../../../repositories/videos';

function VideoForm() {

    const history = useHistory();
    const { formValues, handleInputChange } = useForm({
        title: 'Default Title',
        url: 'https://www.youtube.com/watch?v=ATq6jMgkOl4',
        categoryId: 1
    });

    function handleSubmitEvent(event) {
        event.preventDefault();
        videosRepository.create({
            ...formValues
        })
        .then(() => {
            history.push('/');
        });
    }


    return (
        <Scaffold>
            <h1>Cadastro de Vídeo</h1>


            <form onSubmit={handleSubmitEvent}>
                <FormField name='title' label='Titulo' value={formValues.title} onChange={handleInputChange} />

                <FormField name='url' label='Url' value={formValues.url} onChange={handleInputChange} />

                <button>Cadastrar</button>
            </form>


            <Link to="/create/category">Criar Categoria</Link>
        </Scaffold>
    )
}

export default VideoForm;