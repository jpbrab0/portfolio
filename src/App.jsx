import React from "react";
import Routes from "./routes";
import Konami from "react-konami-code";
function App() {
  const redirect = function() {window.location = "/secretpage"}
  return (
    <>
      <Konami action={redirect}>
      </Konami>
      <Routes />
      {console.log(
        "%c Me segue no github",
        "font-weight: bold; font-size: 50px;color: white; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
      )}
      {console.log(
        `%c
        wow 
        ─────────▄──────────────▄
        ────────▌▒█───────────▄▀▒▌
        ────────▌▒▒▀▄───────▄▀▒▒▒▐
        ───────▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐
        ─────▄▄▀▒▒▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐
        ───▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀██▀▒▌
        ──▐▒▒▒▄▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄▒▒▌
        ──▌▒▒▐▄█▀▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐
        ─▐▒▒▒▒▒▒▒▒▒▒▒▌██▀▒▒▒▒▒▒▒▒▀▄▌
        ─▌▒▀▄██▄▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌
        ─▌▀▐▄█▄█▌▄▒▀▒▒▒▒▒▒░░░░░░▒▒▒▐
        ▐▒▀▐▀▐▀▒▒▄▄▒▄▒▒▒▒▒░░░░░░▒▒▒▒▌
        ▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒░░░░░░▒▒▒▐
        ─▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌
        ─▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐
        ──▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▌
        ────▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀
        ───▐▀▒▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀
        ──▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▀
              
              \n \n Feito com ReactJs \n \n Github: https://github.com/jpbrab0`,
        "color: #51dcf7"
      )}
    </>
  );
}

export default App;
