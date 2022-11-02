import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 10rem;
  gap: 4.8rem;

  > div {
    button {
      margin-top: 3rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 2.25rem;
    margin: 0 auto 5rem;

    > div {
      button {
        margin-top: 1rem;
      }
    }
  }
`

export const Icon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  background: rgba(9, 151, 124, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  > img {
    width: 38.4px;
    height: 38.4px;
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px; 
  gap: 20px;
  border-radius: 20px;
  transition: linear 0.2s;
  cursor: default;

  :not(:last-child) {
    margin-bottom: 1rem;
  }

  :hover {
    background: linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%);
    box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
  }

  strong {
    display: block;
    font-size: 1.125rem;
    color: ${(props) => props.theme.white};
    line-height: 130%;
    letter-spacing: 0.01em;
    margin-bottom: 0.5rem;
  }
`