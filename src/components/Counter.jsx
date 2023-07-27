import React, { useState, useEffect } from "react";

const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);
  const increment = targetNumber / 10; // Nombre d'incréments en 2 secondes (40 * 50ms)

  useEffect(() => {
    if (count < targetNumber) {
      const timerId = setInterval(() => {
        // Calculer le nouveau compteur en fonction de l'incrément
        const newCount = count + increment;

        // S'assurer que le compteur n'excède pas la valeur cible
        if (newCount >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timerId);
        } else {
          setCount(newCount);
        }
      }, 50); // Intervalle de 50 ms (20 fois par seconde)

      return () => {
        clearInterval(timerId); // Nettoyer l'intervalle lors du démontage du composant
      };
    }
  }, [count, targetNumber, increment]);

  return (
    <div>
      <span>{Math.round(count)}</span>
    </div>
  );
};

export default Counter;
