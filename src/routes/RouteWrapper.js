import { Route } from 'react-router-dom';

import DefaultLayout from '../config/layout/Default';

export default function RouteWrapper({ component: Component, ...rest }) {
    const Layout = DefaultLayout;
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

// TODO: routerWrapper é usado?
