import { useState } from "react";
import { TURNOS } from "./utils/constantes";
import { Header } from "./components/Header"
import WinnerSection from "./components/WinnerSection";
import { verificarGanador } from "./utils/funciones";

function App() {

  const TABLA = Array.from({ length: 9 }, () => null);

  const [tablero, setTablero] = useState(TABLA);
  const [turno, setTurno] = useState(TURNOS.x);
  const [winner, setWinner] = useState(null);
  const [claseOver, setClaseOver] = useState('opacity-100')

  const actualizarTablero = i => {
    const newTablero = [...tablero];

    if (newTablero[i] != null || winner) return

    newTablero[i] = turno;
    setTablero(newTablero)
    setTurno(turno == TURNOS.x ? TURNOS.o : TURNOS.x)

    const ganador = verificarGanador(newTablero);

    ganador && setTimeout(() => setWinner(ganador), 200)
    ganador == false && setTimeout(() => setWinner(false), 200)
  }

  const handleClick = i => {
    actualizarTablero(i)
  }

  const reiniciar = () => {
    setTablero(TABLA)
    setWinner(null);
    setTurno(TURNOS.x);
  }

  const handleOver = () => {
    setClaseOver('opacity-5')
  }

  const handleOut = () => {
    setClaseOver('opacity-100')
  }

  return (
    <>

      <Header reiniciar={reiniciar} turno={turno} />

      <main className="grid grid-cols-3 gap-2">
        {tablero.map((item, i) => {
          return (
            <button key={i} onClick={() => handleClick(i)} className="bg-[#1f3540] h-20 w-20 rounded-lg text-white shadow-custom-shadow text-lg">{item}</button>
          )
        })}
      </main>

      <WinnerSection
        claseOver={claseOver}
        handleOver={handleOver}
        reiniciar={reiniciar}
        handleOut={handleOut}
        winner={winner}
      />

    </>
  )
}

export default App
