import { Grid, Box, Typography } from '@mui/material';
import SubPageItem from '../../components/shared-components/subpage-item/SubPage-Item';
import SubPageSubItem from '../../components/shared-components/subpage-subitem/SubPage-Item';
import DividerWithMargin from '../../components/shared-components/divider/Divider';
import StyledCloseIcon from '../../components/page-close/Page-Close';
import SquareBox from '../../components/square-box/Square-Box';
import SquareBoxSuccess from '../../components/square-box-success/Square-Box-Success';
import SquareBoxWarning from '../../components/square-box-warning/Square-Box-Warning';
import SquareBoxMuted from '../../components/square-box-muted/Square-Box-Muted';
import SquareFlexBox from '../../components/square-flex-box/Square-Flex-Box';

function Instruction() {
  return (
    <Grid container spacing={2}>
      <Grid item container xs={12}>
        <Grid item xs={6}>
          <Typography variant="h6">COMO JOGAR</Typography>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <StyledCloseIcon />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Box>
          <SubPageItem itemName="Adivinhe o WORDLE em 6 tentativas" />
          <SubPageItem itemName="Cada palpite deve ser uma palavra válida de 5 letras. Aperte o botão enter para enviar." />
          <SubPageItem itemName="Após cada palpite, a cor das peças mudará para mostrar o quão próximo seu palpite estava da palavra." />
        </Box>
        <DividerWithMargin />
      </Grid>

      <Grid item xs={12}>
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
      </Grid>

      <Grid item xs={12}>
        <SubPageItem itemName="Um novo WORDLE estará disponível a cada dia!" />
        <DividerWithMargin />
      </Grid>
    </Grid>
  );
}

export default Instruction;
