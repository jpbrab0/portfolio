import React, { useState } from "react";
import "./styles.css";

import api from "../../services/api";
import { Link, useHistory } from "react-router-dom";

const NewsLetter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory()

  async function formSend(e) {
    e.preventDefault();

    const data = {
      name,
      email,
    };

    try {
      await api.post("/blog", data);
      alert(`O email foi cadastrado com sucesso!`);
      history.push("/")
    } catch (err) {
      console.log(err);
      alert("Erro no cadastro, tente novamente.");
    }
  }
  return (
    <>
      <form onSubmit={formSend}>
        <h1>Adicionar um email.</h1>
        <div className="form__content">
          <div className="form__inputs">
            <div className="item">
              <div>Nome</div>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome."
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="item">
              <div>Email</div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="exemplo@exemplo.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button type="submit">Cadastrar-se!</button>
          <Link to="/removemail">Remover um email.</Link>
        </div>
      </form>
    </>
  );
};

export default NewsLetter;