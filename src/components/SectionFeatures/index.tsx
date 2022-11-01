import { Text } from '../Text'
import { Heading } from '../Heading'

import { Container, AppsStore } from './styles'

export function SectionFeatures() {
  return (
    <Container>
      <div>
        <img src="./mockup-features.svg" />
      </div>

      <div>
        <Heading>Easily control your billing & invoicing.</Heading>
        <Text variant="lg">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</Text>

        <AppsStore>
          <a href="#">
            <img src="./logo-app-store.svg" />
          </a>

          <a href="#">
            <img src="./logo-google-play.svg" />
          </a>
        </AppsStore>
      </div>
     </Container>
  )
}