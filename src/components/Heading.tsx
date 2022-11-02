import styled from 'styled-components'

export const Heading = styled.h2`
  color: ${(props) => props.theme.white};
  font-size: 3rem;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: 0.01em;

  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 140%;
  }
`;