import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto 6.25rem;
  padding: 0 3rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    > a {
      cursor: pointer;
      transition: filter 0.2s;

      :hover {
        filter: brightness(0) invert(1);
      }
    }

    img {
      width: 192.25px;
      height: 80px; 
      object-fit: contain;
      padding: 10px;
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto 3rem;
    overflow: hidden;
    width: 100%;
    height: 60px; 
    position: relative;

    > div {
      gap: 2rem;
      width: inherit;
      height: inherit;
      position: absolute;
      left: 2.25rem;
      top: 0%;
      animation: slide-auto-scroll 10s linear infinite;
    
      > a:hover {
        filter: none;
      }
    }
  }
`
