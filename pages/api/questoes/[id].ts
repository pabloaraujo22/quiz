import dbquestao from '../bancoDeQuestoes';
export default function questoes(req, res) {
    const { id } = req.query;

    const unicaQuestaoOuNada = dbquestao.filter(
        (questao) => questao.id === +id
    );

    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas();
        const obj = questaoSelecionada.respondidaCom(0).paraObjeto();
        res.status(200).json(obj);
    } else {
        res.status(204).send();
    }
}
