import "./styles.css";
import api from "../../services/api";
import { useEffect, useState } from "react";

//react hooks ^

function Home() {
  const [mensagens, setMensagens] = useState([]);
  const [novaMensagem, setNovaMensagem] = useState("");

  async function getMessages() {
    const mensagensFromApi = await api.get("/dashboard");
    console.log(mensagensFromApi.data);

    setMensagens(mensagensFromApi.data);
  }


  async function sendMessage() {
    await api.post("/leaveMessage", {
      text
    })
  }
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <section className="form-section">
        <form className="write-message">
          <h1>Escreva algo pro futuro: </h1>
          <p>Eu gostaria de ....</p>

          <input
            type="text"
            value={novaMensagem}
            onChange={(event) => setNovaMensagem(event.target.value)}
          />
          <button type="button" /*onClick={sendMessage}*/>
            Enviar
          </button>
        </form>
      </section>
      {mensagens.map((mensagem) => {
        return (
          <section className="messages-container" key={mensagem.id}>
            <p>{mensagem.text}</p>
          </section>
        );
      })}
    </div>
  );
}

export default Home;
