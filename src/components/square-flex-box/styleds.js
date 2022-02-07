import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
}));

export default StyledFlexBox;
