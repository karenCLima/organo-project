import React, { useState, useEffect } from 'react';
import './AvatarSelector.css'
import {imagens} from './imagens.js'

const AvatarSelector = ({valor, aoAlterado}) => {

  // Estados para armazenar a URL da imagem selecionada e a visibilidade das imagens
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageVisible, setIsImageVisible] = useState(false);

  // Função para selecionar a imagem
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageVisible(false);
    aoAlterado(image) // Esconde as imagens após a seleção
  };

  // Função para alternar a visibilidade das imagens
  const toggleImageVisibility = () => {
    setIsImageVisible(!isImageVisible);
  };

  // useEffect para redefinir a imagem selecionada quando o valor mudar
  useEffect(() => {
    if (!valor) {
      setSelectedImage(null);
      setIsImageVisible(false);
    }
  }, [valor]);

  return (
    <div>
      <p className='label'>Escolha seu avatar:</p>
      <button className='botaoS' onClick={toggleImageVisibility}>
        {isImageVisible ? 'Esconder opções' : 'Selecionar avatar'}
      </button>
      {isImageVisible && (
        <div className='imagensDiv' style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          {imagens.map((image) => (
            <img
              key={image.id}
              src={image.url}
              valor={valor}
              alt="Avatar"
              onClick={() => handleImageClick(image.url)}
              style={{
                cursor: 'pointer',
                border: selectedImage === image.url ? '2px solid blue' : '2px solid transparent',
                borderRadius: '50%',
              }}
              width={100}
              height={100}
            />
          ))}
        </div>
      )}
      {selectedImage && (
        <div style={{ marginTop: '20px' }}>
          <p className='label'>Avatar selecionado:</p>
          <img src={selectedImage} alt="Selected Avatar" width={100} height={100} style={{ borderRadius: '50%' }} />
        </div>
      )}
    </div>
  );
};

export default AvatarSelector;
