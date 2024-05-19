import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
    },    
    title: {
        type: String,
       
    },    
    price: {
        type: String,
       
    },    
    category: {
        type: String,
       
    },    
    image : {
        type: String,
    }    
    
});

const Book = mongoose.model('Book',bookSchema);

export default Book;