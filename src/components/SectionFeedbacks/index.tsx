import { Text } from '../Text'
import { Heading } from '../Heading'

import { 
  Container, 
  Header,
  CardList,
  Card,
  QuotationMarks,
  Comment,
  CardFooter,
  Avatar
 } from './styles'

const listFeedbacks = [
  { 
    comment: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    avatar: './avatar-1.png',
    name: 'Herman Jensen',
    office: 'Founder & Leader',
  },
  {
    comment: "Money makes your life easier. If you're lucky to have it, you're lucky.",
    avatar: './avatar-2.png',
    name: 'Steve Mark',
    office: 'Founder & Leader',
  },
  {
    comment: "It is usually people in the money business, finance, and international trade that are really rich.",
    avatar: './avatar-3.png',
    name: 'Kenn Gallagher',
    office: 'Founder & Leader',
  }
]

export function SectionFeedbacks() {
  return (
    <Container>
      <Header>
        <Heading>What people are saying about us</Heading>
        <Text variant="lg">Everything you need to accept card payments and grow your business anywhere on the planet.</Text>
      </Header>

      <CardList>
        {listFeedbacks.map((item) => (
          <Card key={item.name}>
            <QuotationMarks>
              <img src="/icon-quotation-marks.svg" />
            </QuotationMarks>
            <Comment>
              {item.comment}
            </Comment>

            <CardFooter>
              <Avatar src={item.avatar}/>
              <div>
                <strong>{item.name}</strong>
                <span>{item.office}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </CardList>
     </Container>
  )
}