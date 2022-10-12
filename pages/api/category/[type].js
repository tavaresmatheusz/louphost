
import mongoConnect from "../../../utils/mongoConnect";
import Category from "../../../models/Category";

export default async function handler(req, res) {
    const type = req.query.type.toLowerCase();

    const { method } = req;

    let code;
    let status;
    let msg;

    await mongoConnect();

    switch(method) {
        case "GET":
        let data = [];
        await Category.find({type: type}).then((cat) => {  
            cat.forEach(c => {
                c.plans.sort(function (x, y) { return x.price - y.price; });
                data.push({id: c.id, type: c.type, displayName: c.displayName, iconUrl: c.iconUrl, plans: c.plans});  
            });

            code = 200;
            status = "OK";
            msg = data;
        }).catch((err) => {
           code = 422;
           status = "ERRO";
           msg = err;   
        });

        res.status(code).send({status: status, msg: msg}); 
        
        break;
        case "PUT":
            const { id, price, ram, panel, disk, processor } = req.body;

            if (!(id && price && ram && panel && disk && processor)) {
                code = 422;
                status = "ERRO";
                msg = "Alguns parâmetros não foram informados!";
            }

            await Category.findOne({id: id, type: type}).then((cat) => {
                if (cat === null) {
                    code = 422;
                    status = "ERRO";
                    msg = "Não é possível criar um plano em uma categoria que não existe!";
                } else {
                    cat.plans.push({price: price, ram: ram, panel: panel, disk: disk, processor: processor});
                    cat.save();
                    code = 200;
                    status = "OK";
                    msg = `Você criou um novo plano`;
                }
            }).catch((err) => {
                code = 422;
                status = "ERRO";
                msg = `${err}`;  
            });
        res.status(code).send({ status: status, msg: msg});
        break;
    }
}