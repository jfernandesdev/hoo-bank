import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 6.25rem;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.5rem 6rem;
  background: linear-gradient(-144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%);
  backdrop-filter: blur(5px);
  border-radius: 20px;

  > div p {
    max-width: 60%;
  }
`
