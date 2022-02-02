import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const StyledGrid = styled(Grid)(({ theme }) => ({
    '&.MuiGrid-root': {},
}));

export default StyledGrid;
