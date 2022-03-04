import Questao from '../components/Questao';
import QuestaoModel from '../model/questao';
import RespostaModel from '../model/resposta';

export default function Home() {
    const questaoTeste = new QuestaoModel(1, 'Melhor Cor?', [
        RespostaModel.errada('verde'),
        RespostaModel.errada('Vermelha'),
        RespostaModel.errada('Azul'),
        RespostaModel.certa('Preto'),
    ]);
    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Questao valor={questaoTeste} />
        </div>
    );
}
