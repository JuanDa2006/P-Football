import BaseLayout from "./baseLayout"

const WorldCupLayout = ({children, pageName}) => {
    return (
        <BaseLayout pageName={pageName}>
            {children}
        </BaseLayout>
    )
}

export default WorldCupLayout;