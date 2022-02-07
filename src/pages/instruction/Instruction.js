import { Grid, Container, Box } from '@mui/material';
import TitleSubPage from '../../components/title-subpage/TitleSubPage';
import SubPageItem from '../../components/subpage-item/SubPage-Item';
import SubPageSubItem from '../../components/subpage-subitem/SubPage-Item';
import DividerWithMargin from '../../components/divider/Divider';
import FlexBox from '../../components/flex-box/Flex-Box';
import StyledCloseIcon from '../../components/page-close/Page-Close';
import SquareBox from '../../components/square-box/Square-Box';
import SquareBoxSuccess from '../../components/square-box-success/Square-Box-Success';
import SquareBoxWarning from '../../components/square-box-warning/Square-Box-Warning';
import SquareBoxMuted from '../../components/square-box-muted/Square-Box-Muted';
import SquareFlexBox from '../../components/square-flex-box/Square-Flex-Box';

function Instruction() {
  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <FlexBox>
            <TitleSubPage title="COMO JOGAR" />
            <StyledCloseIcon />
          </FlexBox>
          <FlexBox>
            <Box>
              <SubPageItem itemName="Adivinhe o WORDLE em 6 tentativas" />
              <SubPageItem itemName="Cada palpite deve ser uma palavra válida de 5 letras. Aperte o botão enter para enviar." />
              <SubPageItem itemName="Após cada palpite, a cor das peças mudará para mostrar o quão próximo seu palpite estava da palavra." />
            </Box>
          </FlexBox>
          <DividerWithMargin />

          <SubPageItem itemName="EXEMPLO" />
          <Box>
            <SquareFlexBox>
              <SquareBoxSuccess content="F" />
              <SquareBox content="I" />
              <SquareBox content="R" />
              <SquareBox content="M" />
              <SquareBox content="A" />
            </SquareFlexBox>
            <SubPageSubItem subItemName="A letra F está na palavra e no local correto." />
          </Box>
          <Box>
            <SquareFlexBox>
              <SquareBox content="C" />
              <SquareBoxWarning content="E" />
              <SquareBox content="R" />
              <SquareBox content="T" />
              <SquareBox content="O" />
            </SquareFlexBox>
            <SubPageSubItem subItemName="A letra E está na palavra, mas no lugar errado." />
          </Box>
          <Box>
            <SquareFlexBox>
              <SquareBox content="L" />
              <SquareBox content="U" />
              <SquareBox content="G" />
              <SquareBoxMuted content="A" />
              <SquareBox content="R" />
            </SquareFlexBox>
            <SubPageSubItem subItemName="A letra A não está na palavra em nenhum lugar." />
          </Box>
          <DividerWithMargin />
          <FlexBox>
            <SubPageItem itemName="Um novo WORDLE estará disponível a cada dia!" />
          </FlexBox>
          <DividerWithMargin />
        </Container>
      </Grid>
    </Grid>
  );
}

export default Instruction;
