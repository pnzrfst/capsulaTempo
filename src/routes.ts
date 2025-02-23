import {app} from './server'
import { MessagesRoutes } from './routes/message/@MessagesRoutes'

//registra o arquivo com todas as rotas cadastradas.
export const routes = async () =>{
    app.register(MessagesRoutes)
}