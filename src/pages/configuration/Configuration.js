import { Grid, Container, Box } from '@mui/material';
import TitleSubPage from '../../components/title-subpage/TitleSubPage';
import SubPageItem from '../../components/subpage-item/SubPage-Item';
import SubPageSubItem from '../../components/subpage-subitem/SubPage-Item';
import DividerWithMargin from '../../components/divider/Divider';
import IosSwitch from '../../components/ios-switch/iOS-Switch';
import FlexBox from '../../components/flex-box/Flex-Box';

function Configuration() {
  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <TitleSubPage title="CONFIGURAÇÕES" />
          <FlexBox>
            <Box>
              <SubPageItem itemName="Modo Difícil" />
              <SubPageSubItem subItemName="As dicas reveladas precisam constar na alternativa seguinte" />
            </Box>

            <IosSwitch />
          </FlexBox>
          <DividerWithMargin />
          <FlexBox>
            <SubPageItem itemName="Tema Escuro" />
            <IosSwitch />
          </FlexBox>
          <DividerWithMargin />
          <FlexBox>
            <Box>
              <SubPageItem itemName="Modo Daltônico" />
              <SubPageSubItem subItemName="Cores de alto contraste" />
            </Box>
            <IosSwitch />
          </FlexBox>
          <DividerWithMargin />
        </Container>
      </Grid>
    </Grid>
  );
}

export default Configuration;
