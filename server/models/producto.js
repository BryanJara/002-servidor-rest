const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre:{
        type: String,
        unique: true,
        require: [true, 'El precio es obligatorio']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria'
    },
    precioUni: {
        type: Number,
        required: [true, 'El precio es obligatorio']
    },
    disponible: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Producto', productoSchema);