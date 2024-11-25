import SelMatch from '../matches/selMatchs';
import analisis_partidos_wc from '../../data/worldCP/WC-analisis-partidos';

const MatchWC = ({ worldCId, matchId }) => {
    const mundial = analisis_partidos_wc.find((c) => c.id === worldCId);
    if (!mundial) {
        return <p>No se encontro partido. {}</p>;
    }

    const partido = mundial.partidos.find((c) => c.id === matchId);

    return (
        <SelMatch
            partido={partido.partido}
            mejor_jugador={partido.mejor_jugador}
            puntuacion={partido.puntuacion}
            estadio={partido.estadio}
            fecha={partido.fecha}
            seleccion_1={partido.sel_1}
            seleccion_2={partido.sel_2}
            sel_1_score={partido.sel_1_scroe}
            sel_2_score={partido.sel_2_scrore}
        ></SelMatch>
    );
};

export default MatchWC;
