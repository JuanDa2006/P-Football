import BaseLayout from "./baseLayout"

const WorldCupLayot = ({children, pageName}) => {
    return (
        <BaseLayout pageName={pageName}>
            {children}
        </BaseLayout>
    )
}