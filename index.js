
// express module import 
// express module을 미리 install 했기 때문에 가능
const express = require('express') 
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})