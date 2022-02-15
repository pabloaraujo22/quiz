import dbquestao from '../bancoDeQuestoes';
export default function questoes(req, res) {
    const { id } = req.query;

    res.status(200).json(dbquestao[0].paraObjeto());
}
