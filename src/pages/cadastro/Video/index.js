import React from 'react';
import Scaffold from '../../../components/Scaffold';
import { Link } from 'react-router-dom';

function VideoForm() {
    return (
        <Scaffold>
            <h1>Cadastro de Vídeo</h1>

            <Link to="/create/category">Criar Categoria</Link>
        </Scaffold>
    )
}

export default VideoForm;