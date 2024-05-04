import express from 'express'

const app = express()

const PORT = 1912

app.get('/',(req,res) => {
    const movies = ['ghajini','vaaranam aayiram']

    res.json(movies)
})

app.get('/movie/:id',(req,res) =>{
    const moviesId =req.params.id
    res.json({
        id:moviesId
    })
})

app.listen(PORT,() => {
    console.log(`Server is running at port : http://localhost:${PORT}`)
})