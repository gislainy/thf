var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var cliente = [
  {
    "nome": "Cliente 1",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "id": "I7OdB",
    "tipo": "Normal"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Top",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Especial",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Normal",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Normal",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Top",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Especial",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Normal",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Normal",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Normal",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Normal",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Normal",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Normal",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Normal",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "tipo": "Normal",
    "note": "Teste",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Normal",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "tipo": "Normal",
    "note": "Teste",
    "id": "ngqe7d"
  },
  {
    "nome": "Cliente 2",
    "birthday": 1480557600000,
    "doc_cpf": "11111111111",
    "doc_rg": "123456789",
    "email": "cliente1@teste",
    "telefone": "6266666666",
    "celular": "62999999999",
    "cep": "74480-691",
    "bairro": "Jardim Curitiba",
    "logradouro": "Rua JC 24 A",
    "estado": "GO",
    "cidade": "Goiânia",
    "note": "Teste",
    "tipo": "Normal",
    "id": "ngqe7d"
  }
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});	

app.get('/', function(req, res) {
  res.json(cliente);
});

app.get('/:id', function(req, res) {
	var c = cliente.filter(function (d) {
		return d.id === req.params['id'];
	})[0];
  console.log(c);
  res.json(c);
});

app.delete('/:id', function(req, res) {
  var c = cliente.filter(function (d) {
		return d.id != req.params['id'];
	});
  delete cliente;
  cliente = c;
  return true;
});

app.post('/', function(req, res) {  
  req.body.id = makeid();
  cliente.push(req.body);
  res.json(true);
});

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}