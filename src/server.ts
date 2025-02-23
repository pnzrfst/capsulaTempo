import fastify from "fastify";
import { routes } from "./routes";
import cors from '@fastify/cors';



export const app = fastify();

app.register(routes);

//limita o acesso da api por configuracoes.
app.register(cors, {});

//listener pra subir o server numa porta
app.listen({port: 8080}, (err, address) =>{
    if(err){
        console.log(err)
    }

    console.log(`Server rodando na porta ${address}`);
})

