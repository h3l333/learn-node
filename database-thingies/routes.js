import express from 'express';
const router = express.Router(); //A router object is a 'mini-application' capable of performing only
//middleware and routing functions
import Task from './models.js';

router.get('/todos', async (request, response) => {
    const tasks = await Task.findAll();
    response.status(200).json(tasks);
});

router.post('/todos', async (request, response) => {
    const {content, description} = request.body;

    const newTask = Task.build({
        'content': content,
        'description': description
    })

    try {
        await newTask.save();
        response.status(201).json(newTask);
    } catch (error) {
        response.json(error);
    }
});

router.get('/todo/:id', async (request, response) => {
    const task = await Task.findOne({
        where: {
            id:request.params.id
        }
    }); //Queries the database for a single row from the Task table that
    //matches the given conditions
})

router.patch('/todo/:id', async (request, response) => { //the PATCH HTTP request is used to partially
    //update a resource
    const task = await Task.findOne({
        id:request.params.id
    });

    const {is_complete} = request.body;

    await task.set(
        {
            is_complete:is_complete
        }
    );

    await task.save();

    response.status(200).json(task);
});

router.put('/todo/:id', async (request, response) => { //router.put defines a handler for HTTP PUT requests
    const task = await Task.findOne({
        where: {
            id:request.params.id
        }
    });

    const {is_complete, content, description} = request.body;

    await task.set(
        {
            is_complete: is_complete,
            content: content,
            description: description
        }
    )

    await task.save();

    response.status(200).json(task);
})

router.delete('/todo/:id', async (request, response) => {
    const task = await Task.findOne(
        {
            where: {
                id:request.params.id
            }
        }
    )
});

export default router; 