import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export default StyledBox;
