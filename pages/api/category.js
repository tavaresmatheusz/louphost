import mongoConnect from "../../utils/mongoConnect";
import Category from '../../models/Category'

export default async function handler(req, res) {
    const { method } = req;
    const {type, id} = req.body;

    await mongoConnect();

    switch(method) {
        case 'GET':

            if (!(type && id)) {
                res.status(422).send({erro: "Não foi possível encontrar uma categoria com esse id e type."});
                return;
            }
            let data = [];
            await Category.findOne({id: id, type: type}).then(function(cat) {
                data.push(cat);
            });
            
            res.status(200).send(data);
            break;
        case 'PUT':
            if (!(type && id)) {
                res.status(422).send({status: "ERRO", msg: "Para criar uma categoria de planos você deve passar o id e type."});
                return;
            }
            const {displayName, type, id, iconUrl, plans} = req.body;
            Category.findOne({id: id, type: type}).then(function(cat) {
                if (cat === null) {
                    new Category({displayName: displayName, type: type, id: id, iconUrl: iconUrl, plans: plans}).save().then(() => res.status(200).send({status: "OK", msg: `A categoria ${displayName} - ${type} foi criada`}))
                } else {
                    res.status(422).send({erro: "Já existe uma categoria de planos com esse id e type."});
                }
            });
            break;
        default:
            break;

    }
}