import Book from "../models/bookModel.js";
import User from "../models/userModel.js"

export const getBook = async (req, res) => {
    try{
        const books = await Book.find ();
        res.status(200).json(books);
    } catch (error){
        console.log("Error:", error);
        res.status(500).json(error);
    }
};

export const createBook = async (req, res) => {
   
    try{
        const book = await Book.create(req.body);
        console.log(req.body);
        res.status(201).json({
            success: true,
            book
        });
        
    } catch (error){
        console.log("Error:", error);
        res.status(500).json(error);
    }
}

export const BookById = async (req, res) => {
    try {
        const book = await Book.findById (req.params.id)
        console.log(req.params.id);
        res.status(200).json ({
            success: true,
            book
        });

    }catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
   }
}

export const postBookUpdate = async (req, res) =>{
    console.log("params:", req.params.id);
    console.log("body:", req.body);
    const {name, title, price, category, image } = req.body;
    
    
    try{
        let book = await Book.findByIdAndUpdate(req.params.id, {name, title, price, category, image});
        res.json({
            success: true,
            book
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json(error);
    }
}
export const bookDelete = async (req, res) =>{
    const bookId = req.params.id;
    try {
        const book = await Book.findByIdAndDelete(bookId);

        if(!book) {
            res.json({
                error: 'Book already deleted'
            });
        }
        res.json(book);
    }
    catch(error) {
        console.log("Error:", error);
        res.status(500).json(error);
    }

}    