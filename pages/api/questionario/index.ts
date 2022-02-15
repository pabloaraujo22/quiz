import questoes from '../bancoDeQuestoes';
export default function qustionario(req, res) {
    res.status(200).json(questoes.map((questao) => questao.id));
}
