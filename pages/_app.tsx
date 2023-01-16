import {AppProps} from 'next/app'
import '../styles/index.css'
import {CookiesProvider} from "react-cookie";
import {MyUserContextProvider} from "../utils/useUser";

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <CookiesProvider>
            <MyUserContextProvider>
                <Component {...pageProps} />
            </MyUserContextProvider>
        </CookiesProvider>
    )
}
