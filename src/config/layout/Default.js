import { Grid } from '@mui/material';

import Header from '../../components/header';

import StyledGrid from './styleds';

function DefaultLayout({ children }) {
    return (
        <StyledGrid container>
            <Header />
            <Grid item>{children}</Grid>
            {/* <Footer /> */}
        </StyledGrid>
    );
}

export default DefaultLayout;
