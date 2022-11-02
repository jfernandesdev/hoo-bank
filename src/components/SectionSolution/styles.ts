import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 10rem;
  gap: 5.4rem;

  p {
    max-width: 80%;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 2.25rem;
    margin: 0 auto 5rem;

    > div + div {
      order: -1;
    }
   
    > div > img {
      width: 100%;
    }

    p {
      max-width: 100%;
    }
  }
`