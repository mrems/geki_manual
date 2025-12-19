import React from 'react';
import { Outlet } from 'react-router-dom';
import gekiTitle from './assets/geki_title.png'; // Importation du logo
import LanguageSwitcher from './LanguageSwitcher.jsx'; // Importation du LanguageSwitcher

function App() {
  return (
    <div 
      className="manual-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '80px', // Ajuster l'espace pour le haut
      }}
    >
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px', // Correspond au max-width du manual-container
          position: 'absolute',
          top: '15px',
          padding: '0', // Ajouter un padding pour éviter que ça touche les bords
        }}
      >
        <img 
          src={gekiTitle} 
          alt="Titre de l'application" 
          style={{
            height: '40px',
            width: 'auto',
          }}
        />
        <LanguageSwitcher />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
