import styled from 'styled-components'

interface ContainerProps {
  quantity?: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  margin: 4rem auto 10rem;

  @media (max-width: 768px) {
    margin: 4rem auto 5rem;
    justify-content: space-around;
    overflowX: scroll;
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    text-align: center;
  }
`

export const Amount = styled.strong`
  color: ${(props) => props.theme.white};
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 130%;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`

export const Description = styled.span`
  font-size: 1.3rem;
  line-height: 130%;
  text-transform: uppercase;
  background: radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    white-space: nowrap;
  }
`

export const Separator = styled.span`
  content: '';
  height: 0px;
  width: 13.63px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.6);
  transform: rotate(90deg);

  :last-child {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`