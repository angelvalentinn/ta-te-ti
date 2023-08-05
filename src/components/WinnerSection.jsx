

const WinnerSection = ({ claseOver, handleOver, handleOut, reiniciar, winner }) => {
    if(winner == null) return
    return (
        <section
            className={`bg-[#192a32] ${claseOver} transition ease-in border p-6 text-white  h-56 w-56 absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 rounded-md flex flex-col items-center justify-around`}
        >
            {
                winner  ?  <>
                                <h2 className="font-bold text-2xl leading none">Ganó:</h2>
                                <p className="text-2xl border h-14 w-14 rounded-lg grid place-items-center">
                                    {winner}
                                </p>
                            </>
                        : <h2 className="font-bold text-2xl leading none">¡ Empate !</h2>
            }
            <button onClick={reiniciar} className="border h-8 w-32 rounded-sm">
                Reiniciar
            </button>
            <i
                className={`bi bi-binoculars absolute top-1 left-2 cursor-pointer`}
                onMouseOver={handleOver}
                onMouseLeave={handleOut}
            ></i>
        </section>
    );
};

export default WinnerSection;
