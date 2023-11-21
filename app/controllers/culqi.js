const saleModel      = require('../models').sale;
const sale_detailModel      = require('../models').saleDetail;
const Culqi = require('culqi-node');
//INICIALIZAMOS CULQI
const culqi = new Culqi({
    privateKey: process.env['PRIVATE_KEY_CULQI'] || "sk_test_546ecc649f07624b",   //SI ALGUÍÉN CONOCE DE COMO PUEDO JALAR ESE DATO DEL ENV SERIA GENIAL
    publicKey: process.env['PUBLIC_KEY_CULQI'] || "pk_test_1916e2a75d4efdcb",  //SI ALGUÍÉN CONOCE DE COMO PUEDO JALAR ESE DATO DEL ENV SERIA GENIAL
    pciCompliant: true,    
}); 
module.exports = { 

    async test(req, res) {
        const detail = req.body.detail        
        let resultSaleDetail = [] 


        try{    
            //CREAR CARGO
            charge = await culqi.charges.createCharge(req.body);

            //SI SE REGISTRO LA VENTA EN CULQI, PROCEDEMOS A INSERTAR EN NUESTRA TABLA
            //INSERTAR EN SALE
            const sale = await saleModel.create({idUser: req.body.idUser, idTypDoc: 1, serie: '1', number: '1', mtoTotal: req.body.amount/100, tokenCulqiUser: req.body.source_id, tokenCulqiOrder: charge.id})

            //INSERTAR SALE_DATAIL
            resultSaleDetail= detail.map( async (item, index) => {   
                const row = {
                    idSale : sale.dataValues.id,
                    idProduct : item.id,
                    quantity : item.quantity,
                    valTotal : item.total
                }                            
                const saleDetail = await sale_detailModel.create(row)  
                return  saleDetail.dataValues
            })    

            //AGREGANDO CAMPO DETAL PARA MOSTRAR EN EL RES
            sale.dataValues.detail = await Promise.all(resultSaleDetail).then((data) => data)
            
            //CUANDO EL RES ES CORRECTO
            res.status(200).json({
                success: true,
                message: "Compra registrada correctamente.",
                data: sale
            })

        }catch(error){            
            res.status(500).json({
                success: false,
                message: error,
                data: {}
            })
        }
    }
}