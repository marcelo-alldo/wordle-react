import { Grid, Container, Box } from '@mui/material';
import TitleSubPage from '../../components/title-subpage/TitleSubPage';
import SubPageItem from '../../components/subpage-item/SubPage-Item';
import SubPageSubItem from '../../components/subpage-subitem/SubPage-Item';
import DividerWithMargin from '../../components/divider/Divider';
import IosSwitch from '../../components/ios-switch/iOS-Switch';

function Configuration() {
  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <TitleSubPage title="CONFIGURAÇÕES" />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <SubPageItem itemName="Modo Difícil" />
              <SubPageSubItem subItemName="As dicas reveladas precisam constar na alternativa seguinte" />
            </Box>
            <IosSwitch />
          </Box>
          <DividerWithMargin />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <SubPageItem itemName="Tema Escuro" />
            <IosSwitch />
          </Box>
          <DividerWithMargin />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <SubPageItem itemName="Modo Daltônico" />
              <SubPageSubItem subItemName="Cores de alto contraste" />
            </Box>
            <IosSwitch />
          </Box>
          <DividerWithMargin />
        </Container>
      </Grid>
    </Grid>
  );
}

export default Configuration;
