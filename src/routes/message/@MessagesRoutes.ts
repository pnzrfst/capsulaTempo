import { app } from "../../server"
import { LeaveMessage } from "./leave_message"

//registro minhas rotas importando dos outros arquivos
export const MessagesRoutes = async () =>{
    app.register(LeaveMessage)
}