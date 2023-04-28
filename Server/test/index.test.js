const server = require('../src/app');
const request = require('supertest');

describe(`GET /rickandmorty/character/:id`,()=>{
    it(`Responde con status: 200`, async ()=>{
        const response = await request(server).get('/rickandmorty/character/1');
        expect(response.statusCode).toEqual(200)
    })

    it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`,async ()=>{
        const response = await request(server).get('/rickandmorty/character/1');
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("species")
        expect(response.body).toHaveProperty("gender")
        expect(response.body).toHaveProperty("status")
        expect(response.body).toHaveProperty("origin")
        expect(response.body).toHaveProperty("image")
    })

    it(`Si hay un error responde con status: 500`,async ()=>{
        const response = await request(server).get('/rickandmorty/character/900');
        expect(response.statusCode).toEqual(500)
    })
})

describe("_GET /rickandmorty/login_",()=>{
    it(`Si las credenciales del login son correctas devuelve un objeto con access en true`,async ()=>{
        const response = await request(server).get("/rickandmorty/login?email=benny@gmail.com&password=123456");
        expect(response.text).toEqual("{\"access\":true}")
    })
    it(`Si las credenciales del login son correctas devuelve un objeto con access en false`,async ()=>{
        const response = await request(server).get("/rickandmorty/login?email=hola@gmail.com&password=156");
        expect(response.text).toEqual("{\"access\":false}")
    })
})

describe("_POST /rickandmorty/favorite",()=>{

    const array = [];

    it(`si envio un post a favorite debe devolver un arreglo y eso se comprueba con el status code 200`,async ()=>{
        const response = await request(server).post("/rickandmorty/favorite").send({id: 1, name: "Benny"})
        expect(response.statusCode).toEqual(200);
    })
})