const express = require('express')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json())

const mongoose = require('mongoose')

main().catch(err => console.log(err))

// async function main() {
//   await mongoose.connect('mongodb+srv://test:test@cluster0.nqat0.gcp.mongodb.net/todo?retryWrites=true&w=majority')
// }

// async function main() {
//   await mongoose.connect('mongodb+srv://test:test@lorem.4pnih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
// }
// async function main() {
//   mongoose.connect('mongodb+srv://test:test@todo.3wxjn.mongodb.net/somethingToDo?retryWrites=true&w=majority')
// }

async function main() {
  mongoose.connect('mongodb+srv://test:test@cluster0.iygkj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
}


// async function main() {
//   await mongoose.connect('mongodb+srv://test:test@cluster0.9jdsj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
// }

const todoSchema = new mongoose.Schema({
  item: String
})

const Todo = mongoose.model('Todo', todoSchema)
const itemOne = Todo({ item: 'buy flowers' }).save(function (err) {
  if (err) throw err
  console.log('item saved')
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  // res.send('hello.kmoko')
  res.render('index', { message: "hello atticus and linus !!!" })
})


app.listen(3000, () => {

})
