const express = require("express");

const app = express();

app.get("/message/:id/:user", (request, response) => { // aqui os parâmetros são obrigatórios
    const { id, user } = request.params;
    // response.send("Hello World!")

    response.send(`
    ID da mensagem ${id};
    para o usuário ${user}`);
});

app.get("/users", (request, response) => { // aqui os parâmetros não são obrigatórios
    const { page, limit } = request.query;

    response.send(`Essa é a page ${page} com limite ${limit}`);
}); 

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));