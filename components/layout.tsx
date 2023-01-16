import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import CoreAppBar from "./app-bar";

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const Layout = ({preview, children}: Props) => {
    return (
        <>
            <Meta/>
            <CoreAppBar/>
            <div className="min-h-screen">
                <Alert preview={preview}/>
                <main>{children}</main>
            </div>
            <Footer/>
        </>
    )
}

export default Layout
