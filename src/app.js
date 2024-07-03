import express from 'express'
import connectaNaDatabase from './config/dbConnect.js'

const conexao = await connectaNaDatabase();

conexao.on("error", (erro) =>{
  console.error("Erro de conexao", erro)
})

conexao.once("open", () =>{
  console.log("Conexao com o banco feita com sucesso")
})

const app = express()
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

function buscaLivro(id) {
    return livros.findIndex(livro =>{
        return livro.id === Number(id);
    })
}

app.get("/", (req, res) =>{
    res.status(200).send("Jovens animados");
});

app.get("/livros", (req, res) =>{
    res.status(200).json(livros);
})

app.get("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id)
    res.status(200).json(livros[index]);
})

//Postando um Livro
app.post("/livros", (req, res) =>{
    livros.push(req.body)
    res.status(201).send("livro cadastrado com sucesso")
})

// Atualizando Livro
app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

export default app;

// get - Obter
// post - Enviar
// put - Atualizar
// delete - Deletar
// async - asyn-crona com uma Promise (uma promessa)
// async - funcionamento junto, e asyncrona algo a Distancia
// await - Aguardar 