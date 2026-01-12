let pesquisas = [];

exports.create = (req, res) => {
  const { nota, comentario, empresaId, colaboradorId } = req.body;

  // Lógica de Classificação NPS
  let classificacao = "";
  if (nota >= 9) classificacao = "Promotor";
  else if (nota >= 7) classificacao = "Neutro";
  else classificacao = "Detrator";

  const novaPesquisa = {
    id: pesquisas.length + 1,
    nota,
    comentario,
    classificacao, // O sistema gera isso sozinho!
    empresaId,
    colaboradorId,
    data: new Date(),
  };

  pesquisas.push(novaPesquisa);
  res.status(201).json(novaPesquisa);
};

exports.list = (req, res) => {
  res.json(pesquisas);
};

exports.getDashboard = (req, res) => {
  const total = pesquisas.length;

  if (total === 0) {
    return res.json({ mensagem: "Nenhuma pesquisa registrada ainda." });
  }

  const promotores = pesquisas.filter(
    (p) => p.classificacao === "Promotor"
  ).length;
  const detratores = pesquisas.filter(
    (p) => p.classificacao === "Detrator"
  ).length;

  // Fórmula clássica do NPS: % Promotores - % Detratores
  const npsScore = ((promotores - detratores) / total) * 100;

  res.json({
    totalPesquisas: total,
    npsScore: npsScore.toFixed(2), // Arredonda para 2 casas decimais
    distribuicao: {
      promotores,
      neutros: total - (promotores + detratores),
      detratores,
    },
  });
};
