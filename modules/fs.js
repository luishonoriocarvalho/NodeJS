const fs = require("fs")
const path = require("path")

// Criar uma pasta

/*
fs.mkdir(path.join(__dirname, "/test"), {} ,(err) => {
    if(err){
        return console.log("Erro", err)
    }

    console.log("Pasta criada com sucesso")
})




// Criar um arquivo

fs.writeFile(path.join(__dirname, "test", "test.txt"), "Hello Node!", (err) => {
    if(err){
        return console.log("Error", err)
    }

    console.log("Arquivo criado com sucesso!!")
})

Adicionando conteúdo emum arquivo

fs.appendFile(path.join(__dirname, "test", "test.txt"), "Hello World!", (err) => {
    if(err){
        return console.log("Error", err)
    }

    console.log("Texto adicionado com sucesso!!")
})



fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf8", (err, data) =>{
    if(err){
        return console.log("Error", err)
    }

    console.log(data)
})

Como as funções são assíncronas para fazer tudo de uma vez teria que colocar tudo dentro do fs.writeFile


fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso!");

    // Adicionar à um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "hello world!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log("Arquivo modificado com sucesso!");
      }
    );

    // Ler arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log(data);
      }
    );
  }
);

*/

