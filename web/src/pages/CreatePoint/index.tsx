import React from 'react';
import { FiArrowLeft} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.svg';
const CreatePoint = () =>{
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"/>
                <Link to="/">
                    <FiArrowLeft />
                    Voltar para Home
                </Link>
            </header>
            <form>
                <h1>Cadastro do <br/> ponto de coleta</h1>
                <fieldset>
                    <legend>
                        <h2>Dados</h2>                        
                    </legend>
                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                    </legend>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Ítens de coleta</h2>
                    </legend>
                </fieldset>
            </form>
        </div>
    );
};
export default CreatePoint;