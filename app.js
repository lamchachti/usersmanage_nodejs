//3KtHlxoeL6XWSe28
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const port = 80;
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'));

const User=require('./models/userSchema')
const mongoose = require('mongoose');
const { render } = require('ejs');


app.get('/', (req, res) => {
    User.find()
        .then((result)=>{
            res.render('home',{title:'users',users:result})
        })
        .catch((err)=>{
            console.log(err)
        })
  });

/* RENDER add form*/
app.get('/add.html',(req,res) => {
    res.render('add')
});

/* POST a new user */
app.post('/add', (req, res) => {
    const user= new User(req.body)
    user.save()
    .then(result=>{
        res.redirect('/')
    })
    .catch((err)=>{
        console.log(err)
    })
});
/* EDIT (PUT) an user */

/* DELETE an user */

app.delete('/delete/:id',(req,res)=>{ 
    User.findByIdAndDelete(req.params.id).then(()=>{
        res.redirect('/')
    }).catch((err)=>{console.log(err)})
    
})


mongoose.connect('url-to-db')
        .then(()=>{
            app.listen(port, () => {
                console.log(`Server lestening on http://localhost:${port}`);
              });
        })
        .catch((err)=>{console.log(err)})

