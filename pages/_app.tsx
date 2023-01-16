import {AppProps} from 'next/app'
import '../styles/index.css'
import {MyUserContextProvider} from "../utils/useUser";

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <MyUserContextProvider>
            <Component {...pageProps} />
        </MyUserContextProvider>
    )
}
