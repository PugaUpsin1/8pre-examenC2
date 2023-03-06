const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    const valores= {
            
        boleto:req.query.boleto,
        tipoViaje:req.query.tipoViaje,
        edad:req.query.edad,
        destino:req.query.destino,
        cliente:req.query.cliente,
        precio:req.query.precio,
        descuento:req.query.descuento,
        impuesto:req.query.impuesto,
        pagoTotal:req.query.pagoTotal
         }
    res.render('calculo.html',valores);
})
  

    router.post('/',(req,res)=>{
        const valores= {
            
            boleto:req.body.boleto,
            tipoViaje:req.body.tipoViaje,
            destino:req.body.destino,
            cliente:req.body.cliente,
            edad:req.body.edad,
            precio:req.body.precio,
            descuento:req.body.descuento,
            impuesto:req.body.impuesto,
            pagoTotal:req.body.pagoTotal
             }
        res.render('calculo.html',valores);
    })
    module.exports=router;