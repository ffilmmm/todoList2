import Todo from "../model/Todo.js";

export const addTodo = async (req,res) =>{
    try{
        const newTodo = await Todo.create({
            data: req.body.data,
            createdAt: Date.now()
        })

        await newTodo.save();

        return res.status(200).json(newTodo);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

export const getAllTodos = async(req, res) =>{
    try{
        const todos = await Todo.find({}).sort({'createAt': -1});

        return res.status(200).json(todos);
    }catch(error){
        return res.status(500).json(error.message);
    }

}