import {
  Container,
  ItemWrapper,
  Amount,
  Description,
  Separator
} from './styles'

const ourNumbers = [
  { amount: '3800+', description: 'User Active' },
  { amount: '230+', description: 'Trusted by Company' },
  { amount: '$230M+', description: 'Transaction' },
]

export function OurNumbers() {
  return(
    <Container>
      {ourNumbers.map((item) => (
        <>
          <ItemWrapper key={item.description}>
            <Amount>{item.amount}</Amount>
            <Description>{item.description}</Description>
          </ItemWrapper>
          <Separator />
        </>
      ))}
    </Container>
  ) 
}