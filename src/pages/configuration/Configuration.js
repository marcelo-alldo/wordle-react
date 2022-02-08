import { Grid, Box } from '@mui/material';
import TitleSubPage from '../../components/shared-components/title-subpage/TitleSubPage';
import SubPageItem from '../../components/shared-components/subpage-item/SubPage-Item';
import SubPageSubItem from '../../components/shared-components/subpage-subitem/SubPage-Item';
import DividerWithMargin from '../../components/shared-components/divider/Divider';
import IosSwitch from '../../components/ios-switch/iOS-Switch';
import FlexBox from '../../components/flex-box/FlexBox';

function Configuration() {
  return (
    <Grid container>
      <Grid item xs={12}>
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
      </Grid>
    </Grid>
  );
}

export default Configuration;
