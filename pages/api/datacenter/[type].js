
import mongoConnect from "../../../utils/mongoConnect";
import Datacenter from "../../../models/Datacenter";

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
        await Datacenter.find({node: type}).then((dc) => {  
            
            dc.forEach(d => {
                d.datacenters.forEach((dataCenter) => {
                    dataCenter.plans.sort(function (x, y) { return x.price - y.price; });
                    data.push(dataCenter);
                })
            });

            code = 200;
            status = "OK";
            msg = data;
        }).catch((err) => {
           code = 422;
           status = "ERRO";
           msg = `${err}`;   
        });

        res.status(code).send({status: status, msg: msg}); 
        
        break;
        case "PUT":
            const { city, price, ram, panel, disk, processor } = req.body;

            if (!(city && price && ram && panel && disk && processor)) {
                code = 422;
                status = "ERRO";
                msg = "Alguns parâmetros não foram informados!";
            }

            await Datacenter.findOne({node: type}).then((dc) => {
                if (dc === null) {
                    code = 422;
                    status = "ERRO";
                    msg = "Não é possível criar um plano em um node que não existe!";
                } else {
                    let dataCenter = dc.datacenters.find((element) => element.city === city)
                    dataCenter.plans.push({price: price, ram: ram, panel: panel, disk: disk, processor: processor});
                    dc.save();
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