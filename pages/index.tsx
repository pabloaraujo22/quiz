import { useState } from 'react';
import Questao from '../components/Questao';
import QuestaoModel from '../model/questao';
import RespostaModel from '../model/resposta';

const questaoMock = new QuestaoModel(1, 'Melhor Cor?', [
    RespostaModel.errada('verde'),
    RespostaModel.errada('Vermelha'),
    RespostaModel.errada('Azul'),
    RespostaModel.certa('Preto'),
]);
export default function Home() {
    const [questao, setQuestao] = useState(questaoMock);

    function respostaFornecida(indice: number) {
        console.log(indice);
        setQuestao(questao.respondidaCom(indice));
    }

    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Questao valor={questao} respostaFornecida={respostaFornecida} />
        </div>
    );
}
