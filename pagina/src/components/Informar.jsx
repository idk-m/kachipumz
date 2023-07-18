import React, { useState } from 'react';

const Informar = () => {
  const [playerName, setPlayerName] = useState('');
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const [showWarning, setShowWarning] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de envío del formulario, como enviar una solicitud de reporte al servidor
    console.log('Report submitted:', { playerName, reason, description });
    // Restablecer los campos del formulario
    setPlayerName('');
    setReason('');
    setDescription('');
  };

  return (
    <div className="max-w-md mx-auto border-2 border-verde bg-rosado bg-opacity-10 shadow p-6 py-32 rounded-lg">
      {showWarning && (
        <div className="mb-4 bg-celeste p-4 rounded-lg">
          <p className="text-sm font-bold text-white">
            A continuación se encuentra el formulario para reportar a jugadores o problemas graves relacionados con el juego o su cuenta.
            El mal uso del formulario resultará en penalizaciones.
          </p>
          <button
            onClick={() => setShowWarning(false)}
            className="mt-2 bg-blue-500 hover:bg-rosado text-white font-semibold py-2 px-4 rounded-lg"
          >
            Entendido
          </button>
        </div>
      )}
      <h2 className="text-4xl font-rubik text-white mb-4">Formulario de Reporte de Jugador</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="playerName" className="block font-rubik text-white mb-1">Nombre del Jugador</label>
          <input
            type="text"
            id="playerName"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:ring-rosado focus:border-rosado"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reason" className="block font-rubik text-white mb-1">Motivo del Reporte</label>
          <select
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:ring-rosado focus:border-rosado"
            required
          >
            <option value="">Seleccionar motivo</option>
            <option value="Cheating">Trampas</option>
            <option value="Toxic Behavior">Comportamiento tóxico</option>
            <option value="Hacking">Hackeo</option>
            <option value="Error">Bug</option>
            <option value="Cuenta">Problemas con la cuenta</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-rubik text-white mb-1">Explíquese jovencito</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:ring-rosado focus:border-rosado"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-rosado text-white font-semibold py-2 px-4 rounded-lg"
        >
          Enviar Reporte
        </button>
      </form>
    </div>
  );
};

export default Informar;
