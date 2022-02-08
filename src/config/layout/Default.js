import Header from '../../components/header';
import Footer from '../../components/footer';

import { StyledMainGrid, StyledGrid } from './styleds';

function DefaultLayout({ children }) {
  return (
    <StyledGrid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: '100vh' }}
      flexWrap="nowrap"
    >
      <Header />
      <StyledMainGrid item display="flex" alignItems="center" xs={10}>
        {children}
      </StyledMainGrid>
      <Footer />
    </StyledGrid>
  );
}

export default DefaultLayout;
