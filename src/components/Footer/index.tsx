import { Text } from '../Text'
import { LogoHooBank } from '../LogoHooBank'

import { Container, Links, Copyright } from './styles'

const usefulLinks = [
  { title: 'Content', url: '#' },
  { title: 'How it Works', url: '#' },
  { title: 'Create', url: '#' },
  { title: 'Explore', url: '#' },
  { title: 'Terms & Services', url: '#' }
]

const community = [
  { title: 'Help Center', url: '#' },
  { title: 'Partners', url: '#' },
  { title: 'Suggestions', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'Newsletters', url: '#' }
]

const partner = [
  { title: 'Our Partner', url: '#' },
  { title: 'Become a Partner', url: '#' }
]

export function Footer() {
  return (
    <Container>
      <Links>
        <div>
          <LogoHooBank />
          <Text>A new way to make the payments easy, reliable and secure.</Text>
        </div>

        <div>
          <strong>Useful Links</strong>
          <ul>
            {usefulLinks.map((item) => (
              <li key={item.title}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <strong>Community</strong>
          <ul>
            {community.map((item) => (
              <li key={item.title}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <strong>Partner</strong>
          <ul>
            {partner.map((item) => (
              <li key={item.title}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </Links>
    
      <Copyright>
        <span>Copyright &copy; 2022 HooBank. All Rights Reserved.</span>

        <div>
          <a href="#" title="Instagram">
            <img src="/icon-instagram.svg" />
          </a>

          <a href="#" title="Facebook">
            <img src="/icon-facebook.svg" />
          </a>

          <a href="#" title="Twitter">
            <img src="/icon-twitter.svg" />
          </a>

          <a href="#" title="Linkedin">
            <img src="/icon-linkedin.svg" />
          </a>
        </div>
      </Copyright>
    </Container>
  )
}