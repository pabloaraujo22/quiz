import { useEffect, useRef, useState } from 'react';
import Botao from '../components/Botao';
import Questao from '../components/Questao';
import Questionario from '../components/Questionario';
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
    // const questaoRef = useRef<QuestaoModel>();

    // useEffect(() => {
    //     questaoRef.current = questao;
    // }, [questao]);

    function questaoRespondida(questao: QuestaoModel) {}

    function irPraProximoPasso() {}

    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Questionario
                questao={questao}
                ultima={true}
                questaoRespondida={questaoRespondida}
                irPraProximoPasso={irPraProximoPasso}
            />
        </div>
    );
}
