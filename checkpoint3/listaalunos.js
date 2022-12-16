let cadastro2 = require("./moduloaluno");

let listaAlunos = [];

listaAlunos.push(new cadastro2.cadastro("Breno", 0, [9, 10, 10]));
listaAlunos.push(new cadastro2.cadastro("Inacio", 3, [10, 9.75, 10]));
listaAlunos.push(new cadastro2.cadastro("Amanda", 1, [10, 10, 10]));
listaAlunos.push(new cadastro2.cadastro("Fabiola", 3, [8, 7, 10]));
listaAlunos.push(new cadastro2.cadastro("Thiago", 1, [8, 8, 7]));

module.exports = listaAlunos;
