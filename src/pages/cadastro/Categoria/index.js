import React from 'react';
import Scaffold from '../../../components/Scaffold';
import { Link } from 'react-router-dom';

function CategoryForm() {
    return (
        <Scaffold>
            <h1>Cadastro de Categoria</h1>

            <Link to="/create/category">Criar Categoria</Link>
        </Scaffold>
    )
}

export default CategoryForm;