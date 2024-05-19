import Book from "../models/bookModel.js";

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
