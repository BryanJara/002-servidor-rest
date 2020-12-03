/*const express = require('express');
const _ = require('underscore');
const app = express();
const Producto = require('../models/producto');

app.get('/producto', function (req, res) {
    let desde = req.query.desde || 0;
    let hasta = req.query.hasta || 5;

    Producto.find({})
    .skip(Number(desde))
    .limit(Number(hasta))
    .populate('usuario', 'nombre email')
    .exec((err, productos) => {
        if(err) {
            return res.status(400).json({
                ok: false,
                msg: 'Ocurrio un error al listar las productos',
                err
            });
        }
        res.json({
            ok: true,
            msg: 'Productos listados con exito',
            conteo: productos.length,
            productos
        })
    });
});

app.post('/producto', function(req, res){
    let cat = new Producto({
        descripcion: req.body.descripcion,
        usuario: req.body.usuario
    });

    cat.save((err, proDB) =>{
        if(err) {
            return res.status(400).json({
                ok: false, 
                msg: 'Error al insertar una producto',
                err
            });
        }
        res.json({
            ok: true,
            msg: 'Producto insertado con exito',
            proDB
        });
    });
});

app.put('/producto/:id', function (req, res){
    let id = req.params.id;
    let body = _.pick(req.body, ['descripcion', 'usuario']);

    Categoria.findByIdAndUpdate(id, body, 
        {new:true, runValidators:true, context:'query'}, (err, proDB) => {
            if(err){
                return res.status(400).json({
                    ok: false,
                    msg: 'Ocurrio un error al momento de actualizar',
                    err
                });
            }
            res.json({
                ok: true,
                msg: 'El productp fue actualizado con exito',
                proDB
            });
    });
});

app.delete('/producto/:id', function(req, res){
    let id = req.params.id;

    Producto.findByIdAndRemove(id, { context: 'query' }, (err, proDB) => {
        if(err){
            return res.status(400).json({
                ok: false,
                msg: 'Ocurrio un error al momento de eliminar',
                err
            });
        }
        res.json({
            ok: true,
            msg:'El producto fue eliminado con exito',
            proDB
        });
    });
});
});*/