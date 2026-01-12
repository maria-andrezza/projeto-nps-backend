let colaboradores = []; // Nosso banco fake de colaboradores

exports.create = (req, res) => {
  const { nome, empresaId } = req.body; // Recebemos o nome e o ID da empresa

  const novoColaborador = {
    id: colaboradores.length + 1,
    nome,
    empresaId, // Aqui acontece a "ligação" (Relacionamento)
  };

  colaboradores.push(novoColaborador);
  res.status(201).json(novoColaborador);
};

exports.list = (req, res) => {
  res.json(colaboradores);
};
