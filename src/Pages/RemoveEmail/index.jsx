import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import api from "../../services/api";
import "../NewsLetter/styles.css";

const RemoveEmail = () => {
  const [email, setEmail] = useState("");

  const history = useHistory();
  
  async function removeEmail(e) {
    e.preventDefault();

    const data = {
      email,
    };

    try {
      await api.delete("/blog/deletemail", data);
      alert(`O email retirado do newsletter com sucesso.`);
      history.push("/")
    } catch (err) {
      console.log(err);
      alert("Erro ao tirar o email do banco de dados.Tente novamente.");
    }
  }
  return (
    <form onSubmit={removeEmail} className="remove">
      <h1>Remover um email.</h1>
      <div className="form__content">
        <div className="form__inputs">
          <div className="item">
            <div>Email</div>
            <div>
              <input
                className="remove"
                type="email"
                name="email"
                placeholder="exemplo@exemplo.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Remover o email.</button>
      </div>
    </form>
  );
};

export default RemoveEmail;
