import * as B from './button-style'

type Props = B.ButtonProps & {
  children: string,
}

export function ButtonTertiary ({ children, size, shadow }:Props) {
  return (
    <B.BackgroundButtonTertiary size={size} shadow={shadow}>
      <B.TextButtonTertiary size={size} shadow={shadow}>
        {children}
      </B.TextButtonTertiary>
    </B.BackgroundButtonTertiary>
  )
}
