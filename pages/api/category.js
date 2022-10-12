import mongoConnect from "../../utils/mongoConnect";
import Category from '../../models/Category'

export default async function handler(req, res) {
    const { method } = req;

    let code;
    let status;
    let msg;

    await mongoConnect();

    switch(method) {
        case 'GET':
            await Category.find({}).then((cat) => { 
                let data = [];
                code = 200;
                status = "OK";
                cat.forEach(c => {
                    if (!data.includes( {type: c.type} ))
                        data.push( {type: c.type} );
                })
                msg = data;
            }).catch((err) => { 
                code = 422;
                status = "ERROR"; 
                msg = err; 
                return;
            });

            res.status(code).send({status: status, msg: msg}); 
        break;
        case "PUT":
            const {type, id, displayName,iconUrl} = req.body;

            if (!(type && id && displayName && iconUrl)) {
                code = 422;
                status = "ERRO";
                msg = "Para criar uma categoria de planos você deve passar o id, displayName, iconUrl, plans e o type.";
                
            } else {
                await Category.findOne({id: id, type: type}).then((cat) => {
                    if (cat === null) {
                        new Category({displayName: displayName, type: type.toLowerCase(), id: id, iconUrl: iconUrl, plans: []}).save();
                        code = 200;
                        status = "OK";
                        msg = `A categoria ${displayName} - ${type} foi criada`;
                    } else {
                        code = 422;
                        status = "ERRO";
                        msg = "Já existe uma categoria de planos com esse id e type."
                    }
                }).catch((err) => {
                    code = 422;
                    status = "ERRO";
                    msg = `${err}`
                });
            }
            
            res.status(code).send({status: status, msg: msg});
            break;
    }
}