import QuestaoModel from '../model/questao';
import styles from '../styles/Questao.module.css';
import Enunciado from './Enunciado';
import Resposta from './Resposta';

interface QuestaoProps {
    valor: QuestaoModel;
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor;

    const letras = [
        { valor: 'A', cor: '#F2C866' },
        { valor: 'B', cor: '#F266BA' },
        { valor: 'C', cor: '#85D4F2' },
        { valor: 'D', cor: '#BCE596' },
    ];

    function renderizarRespostas() {
        return questao.respostas.map((resposta, i) => (
            <Resposta
                valor={resposta}
                indice={i}
                letra={letras[i].valor}
                corFundoLetra={letras[i].cor}
                key={i}
            />
        ));
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            {renderizarRespostas()}
        </div>
    );
}
