import { BackgroundButtonTertiary, TextButtonTertiary, ButtonProps } from './button-style'

type Props = ButtonProps & {
  children: string,
}

export function ButtonTertiary ({ children, size, shadow }:Props) {
  return (
    <BackgroundButtonTertiary size={size} shadow={shadow}>
      <TextButtonTertiary size={size} shadow={shadow}>
        {children}
      </TextButtonTertiary>
    </BackgroundButtonTertiary>
  )
}
