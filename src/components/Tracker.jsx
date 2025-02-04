import React, { useState, useEffect } from 'react';

function Tracker() {
    // ce useState traque la position de la souris.
    const [positionSouris, setPositionSouris] = useState({ x: 0, y: 0 });

    useEffect(() => {
    // La fonction de gestion est mis à l'intérieur du 
    const handleMouseMove = (event) => {
      setPositionSouris({ x: event.clientX, y: event.clientY });
    };

    // Ajout de l'écouteur d'événements au montage du composant
    // il sera suprimer lorsque le component sera démonter
    window.addEventListener('mousemove', handleMouseMove);

    // Suppression du eventListener au démontage du composant
    return () => {
      window.removeEventListener('mousemove', handleMouseMove); 
    };
  }, []); // Le tableau vide assure que l'effet ne s'exécute qu'une seule fois, pas besoin de dépendence

  return (
    <div>
      <p>Position de la souris : x = {positionSouris.x}, y = {positionSouris.y}</p>
    </div>
  );
}

export default Tracker;