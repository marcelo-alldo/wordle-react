import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const StyledGrid = styled(Grid)(({ theme }) => ({
  '& .MuiGrid-root': {},
}));

const StyledMainGrid = styled(Grid)(({ theme }) => ({
  width: '50vw',
  [theme.breakpoints.down('md')]: {
    width: '100vw',
    padding: '0 30px',
  },
}));

export { StyledGrid, StyledMainGrid };
