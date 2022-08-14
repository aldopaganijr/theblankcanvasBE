const mongoose = require('../db/connection')

const CartSchema = new mongoose.Schema({

// Maybe turn "items" into schema
	title: String,
	// name: String,
	items: {
	   // productId: Number,
		name: String,
	    imageUrl: String,
		price: Number,
		quantity: Number,
}
	}
);

const Cart = mongoose.model('CartItem', CartSchema);

module.exports = Cart;