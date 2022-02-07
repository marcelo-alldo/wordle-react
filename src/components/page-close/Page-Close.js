import { useNavigate } from 'react-router-dom';
import StyledCloseIcon from './styled';

function PageClose() {
  const navigate = useNavigate();

  function handleClick(route) {
    navigate(`/${route}`);
  }
  return (
    <StyledCloseIcon
      onClick={() => {
        handleClick('home');
      }}
      cursor="pointer"
    />
  );
}
export default PageClose;
