import { Text } from '../Text'
import { Heading } from '../Heading'
import { Button } from '../Button'

import { 
  Container,
  ItemWrapper,
  Icon
 } from './styles'

export function SectionAbout() {
  return (
    <Container id="about">
      <div>
        <Heading>You do the business, we&#39;ll handle the money.</Heading>
        <Text variant="lg">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</Text>

        <Button>Get Started</Button>
      </div>

      <div>
        <ItemWrapper>
          <Icon>
            <img src="./icon-star.svg" />
          </Icon>
          <div>
            <strong>Rewards</strong>
            <Text>The best credit cards offer some tantalizing combinations of promotions and prizes</Text>
          </div>
        </ItemWrapper>

        <ItemWrapper>
          <Icon>
            <img src="./icon-shield-done.svg" />
          </Icon>
          <div>
            <strong>100% Secured</strong>
            <Text>We take proactive steps make sure your information and transactions are secure.</Text>
          </div>
        </ItemWrapper>

        <ItemWrapper>
          <Icon>
            <img src="./icon-send.svg" />
          </Icon>
          <div>
            <strong>Balance Transfer</strong>
            <Text>A balance transfer credit card can save you a lot of money in interest charges.</Text>
          </div>
        </ItemWrapper>
      </div>
     </Container>
  )
}