import styled from 'styled-components'

export const Button = styled.button`
  background: linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%);
  color: ${(props) => props.theme['button-text']};
  border-radius: 10px;
  border: 0;
  padding: 1.125rem 2.06rem;
  
  font-weight: 500;
  font-size: 1.125rem;
  text-transform: capitalize;
  cursor: pointer;
  transition: filter 0.2s;
  white-space: nowrap;

  &:hover {
    filter: brightness(0.8);
  }
`;