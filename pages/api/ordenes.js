import { PrismaClient } from '@prisma/client'

export default async function handler(req, res){
    const primsa = new PrismaClient()

    if(req.method === 'POST'){
        const orden = await primsa.orden.create({
            data:{
                nombre: req.body.nombre,
                total: req.body.total,
                pedido: req.body.pedido,
                fecha: req.body.fecha
            },
        })
        res.json(orden)
    }
    
}