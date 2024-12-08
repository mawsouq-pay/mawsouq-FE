import { Provider } from 'react-redux';
import store from '@/store';

export default function MyApp({ Component, pageProps }: any) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
