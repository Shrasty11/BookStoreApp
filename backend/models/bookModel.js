import mongoose from 'mongoose';


const bookSchema = new mongoose.Schema({
    name: {
        type: String,
    },    
    title: {
        type: String,   
    },
    // user: { 
    //     type: Types.ObjectId, 
    //     ref: 'User', 
    //     required: true 
    // },
    price: {
        type: String,
       
    },    
    category: {
        type: String,
       
    },    
    image : {
        type: Array,
    }    
    
});

const Book = mongoose.model('Book',bookSchema);

export default Book;