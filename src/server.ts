import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";

export const app = fastify();

app.register(routes);

//limita o acesso da api por configuracoes.
app.register(cors, {
  // Opções de configuração do CORS
  origin: "*", // Permite todas as origens (você pode modificar conforme necessário)
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Cabeçalhos permitidos
});

//listener pra subir o server numa porta
app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server rodando`);
});
