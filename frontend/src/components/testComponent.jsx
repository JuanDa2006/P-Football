import SelMatch from './matches/selMatchs';

export default function TestComponent() {
    return (
        <>
            <SelMatch
                partido={'Semifinal'}
                fase={''}
                mejor_jugador={'Messi'}
                puntuacion={8.1}
                estadio={'Lusail Iconic Stadium'}
                fecha={'13 DIC 2022'}
                seleccion_1={'ARG'}
                seleccion_2={'CRO'}
                sel_1_score={3}
                sel_2_score={0}
            />
        </>
    );
}
