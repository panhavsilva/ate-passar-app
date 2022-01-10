import * as B from './button-style'

type Props = B.ButtonProps & {
  children: string,
}

export function ButtonTertiary ({ children, size, shadow, onClick }:Props) {
  return (
    <B.BackgroundButtonTertiary size={size} shadow={shadow}>
      <B.TextButtonTertiary size={size} shadow={shadow} onClick={onClick}>
        {children}
      </B.TextButtonTertiary>
    </B.BackgroundButtonTertiary>
  )
}
