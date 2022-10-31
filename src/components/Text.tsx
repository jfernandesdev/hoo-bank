import styled from 'styled-components'

interface TextProps {
  variant?: 'md' | 'lg'
}

export const Text = styled.p<TextProps>`
  color: ${(props) => props.theme.white70};
  font-size: ${(props) => (props.variant == 'lg') ? `1.125rem` : `1rem`};
  line-height: 170%;
`;