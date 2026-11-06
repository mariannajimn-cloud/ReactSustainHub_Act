'use client';
import { useState } from 'react';   // para guardar y actulizar los votos
import { SAMPLE_INITIATIVES, Initiative } from '../data/initiatives';
import InitiativeCard from '../components/initiativecard';

export default function Home() {
  const [initiatives, setInitiatives] = useState<Initiative[]>(SAMPLE_INITIATIVES);   // alamcena lista de proyectos y permite actializar con el setinicitives
  // funcion votos, recibe el evento e y el ID del proyecto al que le dieron clic.
  const sumVotes = (e: React.MouseEvent, id: string) => {
    // recorremos la lista con .map() buscando la que coincida con el ID
    setInitiatives(prevInitiatives =>
      prevInitiatives.map(item =>
        item.id === id 
          ? { ...item, votes: item.votes + 1 } // si es la tarjeta correcta sumamos uno al voto
          : item    // si no es la dejamos  igual
      )
    );
  };

  return (
    // container visual de la página principal
    <div className="min-h-screen bg-zinc-50 p-8 font-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-zinc-900 mb-2">Climate Action Initiatives</h1>
        
        {/*  método .map() para recorrer la lista y que tenga diseño cda iniciatve */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initiatives.map((item) => (
            <InitiativeCard 
              key={item.id}          // llave única para identificar elementos de una lista
              item={item}            // le pasamos el objeto con la info de la iniciativa a la tarjeta
              onVote={sumVotes}    // pasamos la función de los votos para que el botón sepa qué hacer
            />
          ))}
        </div>
      </main>
    </div>
  );
}