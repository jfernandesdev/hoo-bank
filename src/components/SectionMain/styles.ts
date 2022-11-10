import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1280px;
  margin: 5rem auto 0;
  padding: 5rem 3rem;
  overflow: hidden;

 > div {
  max-width: 60%;

  > p {
    max-width: 65%;
  }
 }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 2.25rem;


    > div {
      max-width: 100%;

      > p {
        max-width: 100%;
      }
    }
  }
`

export const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 4px 10px;

  font-size: 1.125rem;
  line-height: 150%;
  color: ${(props) => props.theme.white60};

  background: linear-gradient(125.17deg, #272727 0%, #11101D 100%);
  border-radius: 10px;

  > span > span {
    font-weight: 400;
    color: ${(props) => props.theme.white};
  }

  @media (max-width: 768px) {
    display: flex;
    font-size: 0.9rem;
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 4.5rem;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.01em;

  margin-top: 1rem;
  margin-bottom: 2.5rem;

  > span {
    background: radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`

export const ImageContainer = styled.img`
  @media(min-width: 769px) and (max-width: 1600px) {
    position: absolute;
    bottom: -3rem;
    right: 0;
  }

  @media (max-width: 768px) {
    width: 120%;
    margin-right: -20%;
  }
`