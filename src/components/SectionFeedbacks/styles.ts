import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto 6.25rem;
  gap: 5.4rem;
  padding: 0 3rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`

export const Header = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 40% 40%;
  gap:  8rem;
  margin-bottom: 5.75rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    padding: 0 2.25rem;
    margin-bottom: 3rem;
  }
`

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    overflow-x: scroll;
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }
`

export const Card = styled.div`
  background: linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%);
  backdrop-filter: blur(5px);
  border-radius: 20px;  
  padding: 2.8rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 250px;
  }
`

export const QuotationMarks = styled.div`
  margin-bottom: 40px;
`

export const Comment = styled.p`
  height: 128px;
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.white};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: 128px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 24px;

  > div {
    display: flex;
    flex-direction: column;

    strong {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 32px;
      color: ${(props) => props.theme.white};

      @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 18px;
      }
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 24px;
      color: ${(props) => props.theme.white70};
      opacity: 0.5;

       @media (max-width: 768px) {
        font-size: 0.8rem;
        line-height: 18px;
      }
    }
  }
`

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
`