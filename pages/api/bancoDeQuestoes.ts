import QuestaoModel from '../../model/questao';
import RespostaModel from '../../model/resposta';

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, ' Qual bicho transmite a Doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),

        // new RespostaModel('Abelha', false),
        // new RespostaModel('Barata', false),
        // new RespostaModel('Pulga', false),
        // new RespostaModel('Barbeiro', true),
    ]),

    new QuestaoModel(
        202,
        'Qual fruto é conhecido do Norte e Nordeste como "jerimum"?',
        [
            RespostaModel.errada('Caju'),
            RespostaModel.errada('Côco'),
            RespostaModel.errada('Chuchu'),
            RespostaModel.errada('Abóbora'),
        ]
    ),
];

export default questoes;
