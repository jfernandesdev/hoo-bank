import { Container } from './styles'

const listCustomers = [
  { name: "airbnb", image: './logo-airbnb.svg' },
  { name: "binance", image: './logo-binance.svg' },
  { name: "coinbase", image: './logo-coinbase.svg' },
  { name: "dropbox", image: './logo-dropbox.svg' },
]

export function SectionCustomers() {
  return (
    <Container>
      {listCustomers.map(item => (
        <a key={item.name}>
          <img src={item.image} alt={item.name} />
        </a>
      ))}
    </Container>
  )
}