let empresas = []; // Banco de dados fake (em memória)

exports.create = (req, res) => {
  const { nome } = req.body; // Pega o nome que você enviará no teste

  const novaEmpresa = {
    id: empresas.length + 1,
    nome: nome,
  };

  empresas.push(novaEmpresa); // Salva na nossa lista
  console.log("Empresa cadastrada:", novaEmpresa);

  res.status(201).json(novaEmpresa); // Responde com sucesso
};

exports.list = (req, res) => {
  res.json(empresas); // Mostra todas as empresas
};
