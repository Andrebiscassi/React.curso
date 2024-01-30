import './App.css'
import React from "react";


import Card from './components/layout/Card'
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default () => (
    <div className="App">
        <h1>Fundamento React</h1>
        <div className="Cards">

            <Card titulo="#05 - Componente com Filhos" color="#A9A9F5">
                <Familia sobrenome="Biscassi" />
                <FamiliaMembro nome="André" />
                 {/* <FamiliaMembro nome="Mayra"  />
            <FamiliaMembro nome="Carlos"  /> */}
            </Card>

            <Card titulo="#04 - Desafio Aleatorio" color="#2E2EFE">
                <Aleatorio min={1} max={50} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#2ECCFA">
                <Fragmento />
            </Card>

            <Card titulo="#02 - ComParametro" color="#01DF01">
                <ComParametro
                    titulo="Situação do Aluno!"
                    aluno="André Biscassi"
                    nota={8.5}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#FF0000">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

)



