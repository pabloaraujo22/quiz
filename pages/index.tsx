import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Questionario from '../components/Questionario';
import QuestaoModel from '../model/questao';

const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
    const router = useRouter();

    const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
    const [questao, setQuestao] = useState<QuestaoModel>();
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

    function idProximaPergunta() {
        const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1;
        return idsDasQuestoes[proximoIndice];
    }

    function irPraProximoPasso() {
        const proximoId = idProximaPergunta();
        proximoId ? irPraProximaQuestao(proximoId) : finalisar();
    }

    function irPraProximaQuestao(proximoId: number) {
        carregarQuestao(proximoId);
    }

    function finalisar() {
        router.push({
            pathname: '/resultado',
            query: {
                total: idsDasQuestoes.length,
                certas: respostasCertas,
            },
        });
    }
    return questao ? (
        <Questionario
            questao={questao}
            ultima={idProximaPergunta() === undefined}
            questaoRespondida={questaoRespondida}
            irPraProximoPasso={irPraProximoPasso}
        />
    ) : (
        false
    );
}
