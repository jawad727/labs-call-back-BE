const router = require('express').Router();

const formDB = require('./form-model')





router.get('/posts', (req,res) => {
    
    formDB
        .getPosts()
        .then(form => {
            res.status(200).json(form)
        })
        .catch(error => {
            res.status(400).json({
                error: "couldnt get dishes"
            })
        })
})


router.get('/posts/:UID', (req,res) => {
        const id = req.params.UID
        
    formDB

        .getPostByUser(id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(error => {
            res.status(400).json({
                error: "couldnt get by id"
            })
        })
})


router.post('/makepost', (req, res) => {
    const post = req.body;

    formDB
    .addPost(post)

    .then(post => {
        res.status(201).json({post})
    })
    .catch(error => {
        res.status(400).json({
            error: "couldnt post"
        })
    })
})

router.put('/posts/:id', (req, res) => {
  
    const id = req.params.id;
    const postbod = req.body;
  
        formDB
        .updatePost(id, postbod)
        .then(updated => {
            res.status(200).json({sucess: "It worked!"})
        })
        .catch(error => {
            res.status(500).json({
                error: "The post information could not be modified."
            });
        })
   
})


module.exports = router;