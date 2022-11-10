import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  max-width: 1280px;
  padding: 0 3rem;
  margin: 0 auto 10rem;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 2.25rem;
    margin: 0 auto 5rem;

    > div > img {
      width: 100%;
    }
  }
`

export const AppsStore = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`