import { Heading } from '../Heading'
import { Text } from '../Text'
import { Button } from '../Button'

import { Container, Box } from './styles'

export function CtaBox() {
  return (
    <Container>
     <Box>
        <div>
          <Heading>Let&lsquo;s try our service now!</Heading>
          <Text variant="lg">Everything you need to accept card payments and grow your business anywhere on the planet.</Text>
        </div>

        <Button>Get Started </Button>
     </Box>
    </Container>
  )
}