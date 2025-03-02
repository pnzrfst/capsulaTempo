import { app } from "../../server"
import { GetMessage } from "./get_message"
import { LeaveMessage } from "./leave_message"

//registro minhas rotas importando dos outros arquivos
export const MessagesRoutes = async () =>{
    app.register(LeaveMessage)
    app.register(GetMessage)
}