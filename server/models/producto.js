/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productoSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria'
    },
    precioUni: {
        type: String,
        default: true
    },
    disponible: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Producto', productoSchema);*/