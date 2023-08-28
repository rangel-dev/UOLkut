import React, { useState } from "react";
import Style from "../MainLogin/index.module.css";
import { HeaderLogin } from "../HeaderLogin/HeaderLogin";
import { FooterLogin } from "../FooterLogin/FooterLogin";
import { Login } from "./Login";
import { Register } from "./Register";
import ForgotPassword from "./ForgotPassword";
import { ResetPassword } from "./ResetPassword"; 
import ImageLogin from "../../../assets/imageform.svg";
import LogoIcon from "../../../assets/ps_orkut2.svg";
import Bg from "../../../assets/bg.svg";

export const MainLogin: React.FC = () => {
  const [formView, setFormView] = useState<
    "login" | "register" | "forgotPassword" | "resetPassword"
  >("login");
  const [, setShowAccessMessage] = useState(true); // 2. Correção aqui

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    switch (formView) {
      case "login":
        // Lógica para login
        break;
      case "register":
        // Lógica para registro
        break;
      case "forgotPassword":
        // Lógica para recuperação de senha
        break;
      default:
        break;
    }
  };

  const shouldShowTitle = formView !== "forgotPassword";

  return (
    <>
      <HeaderLogin />
      <main className={Style.main}>
        <img src={ImageLogin} alt="Orkut" />
        <div className={Style.bg_image}>
          <img src={Bg} alt="Background" />
        </div>
        <p>
          Conecta-se aos seus amigos e familiares <br />
          usando recados e mensagens instantâneas
        </p>
        <div className={Style.form} onSubmit={handleFormSubmit}>
          <img src={LogoIcon} alt="ps_orkut" />
          <h2>
            {shouldShowTitle &&
              (formView === "register"
                ? "Crie sua conta no UOLkut"
                : "Acesse o UOLkut")}
          </h2>

          {formView === "login" && <Login setFormView={setFormView} />}
          {formView === "register" && <Register setFormView={setFormView} />}
          {formView === "forgotPassword" && (
            <ForgotPassword
              setFormView={setFormView}
              hideAccessMessage={() => setShowAccessMessage(false)}
            />
          )}
          {formView === "resetPassword" && (
            <ResetPassword
              setFormView={setFormView}
              hideAccessMessage={() => setShowAccessMessage(false)}
            />
          )}
        </div>
      </main>
      <FooterLogin />
    </>
  );
};
