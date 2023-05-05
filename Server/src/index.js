const server = require("./server")
const {database} = require("./db")
const PORT = 3001;

database.sync({
    alter: true
}).then(()=>{
    server.listen(PORT, () => {
        console.log(`Server raised in port: ${PORT}`);
    })
}).catch(error => console.log(error))






