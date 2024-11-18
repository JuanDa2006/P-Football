import analisis_wc from "../../data/worldCP/WC-analisis";

export default function AnalisisWC({worldCId}) {
    const mundial = analisis_wc.find((c) => c.id === worldCId);

    return (
        <div className='my-4 dark:text-white'>
            <h3 className='font-semibold text-xl'>Análisis Colectivo</h3>
            <ul className='list-disc pl-8'>
                <li>
                    <p>
                        <span className="font-semibold">Táctica:</span> {mundial.tactica}
                    </p>
                </li>
                <li>
                    <p>
                        <span className="font-semibold">Rendimiento:</span> {mundial.rendimiento}
                    </p>
                </li>
                <li>
                    <p>
                        <span className="font-semibold">Eficacia:</span> {mundial.eficacia}
                    </p>
                </li>
                <li>
                    <p>
                        <span className="font-semibold">Destreza:</span> {mundial.destreza}
                    </p>
                </li>
            </ul>
        </div>
    )
}