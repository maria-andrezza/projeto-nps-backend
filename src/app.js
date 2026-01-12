const express = require("express");
const cors = require("cors");
const app = express();

// Importando as rotas de empresa
const empresaRoutes = require("./routes/empresa.routes");
const colaboradorRoutes = require("./routes/colaborador.routes");
const pesquisaRoutes = require("./routes/pesquisa.routes");

app.use(cors());
app.use(express.json());

// Dizendo para a API usar as rotas de empresa no caminho /empresa
app.use("/empresa", empresaRoutes);
app.use("/colaborador", colaboradorRoutes);
app.use("/pesquisa", pesquisaRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "API do MVP rodando com sucesso!" });
});

app.listen(3000, () => {
  console.log("🚀 Servidor pronto na porta 3000");
});
