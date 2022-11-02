import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 6.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    cursor: pointer;
    transition: filter 0.2s;

    :hover {
      filter: brightness(0) invert(1);
    }
  }

  > img {
    width: 192.25px;
    height: 60px; 
    object-fit: contain;
  }
`
