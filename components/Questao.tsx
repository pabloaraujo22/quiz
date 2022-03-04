import QuestaoModel from '../model/questao';
import styles from '../styles/Questao.module.css';
import Enunciado from './Enunciado';
import Resposta from './Resposta';

interface QuestaoProps {
    valor: QuestaoModel;
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor;

    function renderizarRespostas() {
        return questao.respostas.map((resposta, i) => (
            <Resposta
                valor={resposta}
                indice={i}
                letra="A"
                corFundoLetra="#F2C866"
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
