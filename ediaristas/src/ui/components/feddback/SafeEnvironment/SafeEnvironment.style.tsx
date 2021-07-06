// Importando conteúdo da biblioteca material e renomeando para "styled"
import { experimentalStyled as styled } from "@material-ui/core/styles";

export const SafeEnvironmentContainer = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  background: ${({ theme }) => theme.palette.background.default};
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  font-size: 12px;
`;
