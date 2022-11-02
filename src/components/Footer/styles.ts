import styled from 'styled-components'

export const Container = styled.footer`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 2.25rem;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  div:nth-child(1) {
    max-width: 312px;

    > p {
      margin-top: 1.8rem;
    }
  }

  strong {
    display: block;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.white};
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    li {
      a {
        cursor: pointer;
        text-decoration: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: ${(props) => props.theme.white70};
        transition: color 0.2s;

        :hover {
          color: ${(props) => props.theme.white};
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;

    strong {
      margin-bottom: 1rem;
    }
  }
`

export const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  border-top: 1px solid #3F3E45; 
  gap: 1rem;

  > span {
    font-weight: 200;
    font-size: 0.9rem;
    line-height: 150%;
    color: ${(props) => props.theme.white60};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a {
    cursor: pointer;
    transform: filter 0.2s;
  }

  a:hover {
    filter: brightness(0.7);
  }
`

export const GoToTop = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  background: rgba(9,151,124,0.1);

  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 10px;
  bottom: 1.5rem;
  right: -10rem;
  cursor: pointer;
  transparent: filter 0.2s;

  :hover {
    filter: brightness(0.8);
  }

  > img {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`