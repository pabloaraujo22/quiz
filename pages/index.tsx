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

const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
    const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
    const [questao, setQuestao] = useState<QuestaoModel>(questaoMock);
    const [respostasCertas, setRespostasCertas] = useState<number>(0);

    async function carregarIdsDasQuestoes() {
        const resp = await fetch(`${BASE_URL}/questionario`);
        const idsQuestoes = await resp.json();
        setIdsDasQuestoes(idsQuestoes);
    }

    async function carregarQuestao(idQuestao: number) {
        const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
        const json = await resp.json();
        const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
        setQuestao(novaQuestao);
    }

    useEffect(() => {
        carregarIdsDasQuestoes();
    }, []);

    useEffect(() => {
        idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
    }, [idsDasQuestoes]);

    // const questaoRef = useRef<QuestaoModel>();

    // useEffect(() => {
    //     questaoRef.current = questao;
    // }, [questao]);

    function questaoRespondida(questaoRespondida: QuestaoModel) {
        setQuestao(questaoRespondida);
        const acertou = questaoRespondida.acertou;
        setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
    }

    function irPraProximoPasso() {}

    return (
        <Questionario
            questao={questao}
            ultima={true}
            questaoRespondida={questaoRespondida}
            irPraProximoPasso={irPraProximoPasso}
        />
    );
}
