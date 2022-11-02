import styled from 'styled-components'

export const Container = styled.footer`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
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
`

export const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  border-top: 1px solid #3F3E45; 

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