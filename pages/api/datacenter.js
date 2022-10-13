import mongoConnect from "../../utils/mongoConnect";
import Datacenter from '../../models/Datacenter'

export default async function handler(req, res) {
    const { method } = req;

    let code;
    let status;
    let msg;

    await mongoConnect();

    switch(method) {
        case 'GET':
            await Datacenter.find({}).then((dc) => { 
                let data = [];
                code = 200;
                status = "OK";
                dc.forEach(d => {
                    data.push( { node: d.node, nodeImage: d.nodeImage });
                })
                msg = data;
            }).catch((err) => { 
                code = 422;
                status = "ERROR"; 
                msg = `${err}`; 
                return;
            });

            res.status(code).send({status: status, msg: msg}); 
        break;
        case "PUT":
            let { node } = req.body;
            const {city, country, countryFlagUrl, nodeImage} = req.body;

            node = node.toLowerCase();
            
            if (!(city && country && node && countryFlagUrl && nodeImage)) {
                code = 422;
                status = "ERRO";
                msg = "Para criar uma categoria de planos você deve passar os seguintes parâmetros city, country, node, countryFlagUrl, nodeImage.";
                
            } else {
                await Datacenter.findOne({node: node}).then((dc) => {
                    if (dc === null) {
                        new Datacenter({node: node, nodeImage: nodeImage, datacenters: [{ city: city, country: country, countryFlagUrl: countryFlagUrl, plans: []}]
                        }).save();
                        code = 200;
                        status = "OK";
                        msg = `O node ${node} e o datacenter ${city}, ${country} foi criado!`;
                    } else {
                        if (dc.datacenters.find((a) => a.city === city && a.country === country)) {
                            code = 422;
                            status = "ERRO";
                            msg = `O datacenter ${city}, ${country} já existe!`;
                        } else {
                            let datacenter = { city: city, country: country, countryFlagUrl: countryFlagUrl, plans: []};
                            dc.datacenters.push(datacenter);
                            dc.save();

                            code = 200;
                            status = "OK";
                            msg = `O datacenter ${city}, ${country} foi criado!`;
                        }
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