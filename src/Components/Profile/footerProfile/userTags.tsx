import React, { useState } from 'react';
import star from '../../../assets/Star.svg';
import smiley from '../../../assets/Smiley.svg';
import thumbsUp from '../../../assets/ThumbsUp.svg';
import heart from '../../../assets/Heart.svg';
import '../footerProfileCss/userTags.css';

const UserTags: React.FC = () => {
  // Estados para imagens únicas
  const [clicouEstrela, setClicouEstrela] = useState(false);

  // Estados para múltiplas imagens
  const [clicouSmiley, setClicouSmiley] = useState([false, false]);
  const [clicouThumbsUp, setClicouThumbsUp] = useState([false, false, false]);
  const [clicouCoração, setClicouCoração] = useState([false, false]);

  // Manipuladores de clique
  const handleCliqueEstrela = () => setClicouEstrela(!clicouEstrela);

  const handleCliqueArray = (index: number, setEstado: React.Dispatch<React.SetStateAction<boolean[]>>, estado: boolean[]) => {
    const novoEstado = [...estado];
    novoEstado[index] = !novoEstado[index];
    setEstado(novoEstado);
  };

  return (
    <div className="user-tags">
      <ul className='user-tags-items'>
        <li>
          <span>Fãs</span>
          <div className="tag-content">
            <img 
              src={star} 
              alt="Fãs" 
              className={clicouEstrela ? 'clicado' : ''} 
              onClick={handleCliqueEstrela}
            />
            <span>85</span>
          </div>
        </li>
        <li>
          <span>Confiável</span>
          <div className="tag-content">
            {clicouSmiley.map((clicado, index) => (
              <img 
                key={index}
                src={smiley} 
                alt="Confiável" 
                className={clicado ? 'clicado' : ''} 
                onClick={() => handleCliqueArray(index, setClicouSmiley, clicouSmiley)}
              />
            ))}
          </div>
        </li>
        <li>
          <span>Legal</span>
          <div className="tag-content">
            {clicouThumbsUp.map((clicado, index) => (
              <img 
                key={index}
                src={thumbsUp} 
                alt="Legal" 
                className={clicado ? 'clicado' : ''} 
                onClick={() => handleCliqueArray(index, setClicouThumbsUp, clicouThumbsUp)}
              />
            ))}
          </div>
        </li>
        <li>
          <span>Sexy</span>
          <div className="tag-content">
            {clicouCoração.map((clicado, index) => (
              <img 
                key={index}
                src={heart} 
                alt="Sexy" 
                className={clicado ? 'clicado' : ''} 
                onClick={() => handleCliqueArray(index, setClicouCoração, clicouCoração)}
              />
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserTags;
