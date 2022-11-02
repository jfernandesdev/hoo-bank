import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 6.25rem;
  gap: 5.4rem;
`

export const Header = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 40% 40%;
  gap:  8rem;
  margin-bottom: 5.75rem;
`

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`

export const Card = styled.div`
  background: linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%);
  backdrop-filter: blur(5px);
  border-radius: 20px;  
  padding: 45px;
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
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 24px;
      color: ${(props) => props.theme.white70};
      opacity: 0.5;
    }
  }
`

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
`