import { Login } from "./Login";
import { Register } from "./Register";
import React, { useState, ReactElement } from 'react';
import { HeaderLogin } from "../HeaderLogin/HeaderLogin";
import { FooterLogin } from "../FooterLogin/FooterLogin";
import ImageLogin from '../../../assets/imageform.svg';
import LogoIcon from "../../../assets/ps_orkut2.svg";
import Bg from "../../../assets/bg.svg";
import Style from "../MainLogin/index.module.css";

export const MainLogin: React.FC = (): ReactElement => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <>
      <HeaderLogin />
      <main className={Style.main}>
        <img src={ImageLogin} alt="UOLkut" />
        <div className={Style.bg_image}>
            <img src={Bg} alt="Background" />
        </div>
        <p>Conecta-se aos seus amigos e familiares <br /> usando recados e mensagens instantâneas</p>
        <form className={Style.form}>
          <img src={LogoIcon} alt="ps_orkut" />
          <h2>{isRegistering ? 'Crie sua conta no UOLkut' : 'Acesse o UOLkut'}</h2>
          {isRegistering ? <Register /> : <Login setIsRegistering={setIsRegistering} />}
        </form>
      </main>
      <FooterLogin />
    </>
  );
};
