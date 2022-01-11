import { Logo, LogoProps } from './logo-style'

export const LogoStorybook = ({
  size = 'small',
  onClick,
}: LogoProps) => {
  return (
    <Logo size={size} onClick={onClick} />
  )
}
