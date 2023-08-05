import { TURNOS } from "../utils/constantes"; 

export const Header = ({ turno,reiniciar }) => {
    return (
        <header className="flex justify-between items-center mb-2">
            <div className="flex gap-1">
                <span className="text-[#31C3C1] font-bold text-2xl leading-none">
                    {TURNOS.x}
                </span>
                <span className="text-[#F0B231] font-bold text-2xl leading-none">
                    {TURNOS.o}
                </span>
            </div>
            <p className="bg-[#1f3540] text-[#a8bfc3] py-1 px-4 rounded-lg shadow-lg cursor-pointer">
                {turno} turn
            </p>
            <i
                onClick={reiniciar}
                className="bi bi-arrow-repeat bg-[#a8bfc3] h-6 w-6 grid place-items-center rounded-md cursor-pointer"
            ></i>
        </header>
    );
};

