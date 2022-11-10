import { Text } from '../Text'

import { Container, Tag, Title, ImageContainer } from './styles'

export function SectionMain() {
  return (
    <Container id="home">
      <div>
        <Tag>
          <img src="./icon-discount.svg" />
          <span><span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT</span>
        </Tag>
        <Title>The Next <span>Generation</span> Payment Method.</Title>

        <Text variant="lg">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. <br />We examine annual percentage rates, annual fees.</Text>
      </div>

      <ImageContainer src="./mockup-main.png" />
     </Container>
  )
}