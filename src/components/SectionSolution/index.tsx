import { Text } from '../Text'
import { Heading } from '../Heading'
import { Button } from '../Button'

import { Container } from './styles'

export function SectionSolution() {
  return (
    <Container>
      <div>
        <Heading>Find a better card deal in few easy steps.</Heading>
        <Text variant="lg">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</Text>

       <Button>Get Started</Button>
      </div>

      <div>
        <img src="./mockup-solution.svg" />
      </div>
     </Container>
  )
}