import "./styles.css";
import api from "../../services/api";
import { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";

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
      text: `${novaMensagem}`,
    });

    getMessages();
    setNovaMensagem("");
  }
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="main">
      <section className="form-section">
        <form className="write-message">
          <h1>Escreva algo pro futuro: </h1>
          <p>
            <strong>Eu gostaria de ....</strong>
          </p>

          <input
            type="text"
            value={novaMensagem}
            onChange={(event) => setNovaMensagem(event.target.value)}
          />
          <button type="button" onClick={sendMessage}>
            Enviar
          </button>
        </form>
      </section>
      <section className="messages-container">
        {mensagens.map((mensagem) => {
          return (
            <section className="messages" key={mensagem.id}>
              <p>{mensagem.text}</p>
            </section>
          );
        })}
      </section>
    </div>
  );
}

export default Home;
