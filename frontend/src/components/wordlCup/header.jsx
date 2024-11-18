import header_wc from "../../data/worldCP/WC-header";

export default function HeaderWC({worldCId}) {
    const mundial = header_wc.find((c) => c.id === worldCId);

    return (
        <div className='my-4 dark:text-white'>
            <p>{mundial.header}</p>
        </div>
    )
}