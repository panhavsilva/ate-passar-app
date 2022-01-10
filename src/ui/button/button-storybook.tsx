import * as B from './button-style'
import { ButtonTertiary } from './button-tertiary'

type ButtonPropsStoryBook = B.ButtonProps & {
  type: 'primary' | 'secondary' | 'tertiary' | 'red',
  label: string,
  onClick?: () => void,
}

export const ButtonStorybook = ({
  type = 'primary',
  size = 'medium',
  shadow = 'off',
  label,
  onClick,
}: ButtonPropsStoryBook) => {
  if (type === 'red') {
    return (
      <B.ButtonRed size={size} shadow={shadow} onClick={onClick}>
        {label}
      </B.ButtonRed>
    )
  }
  if (type === 'secondary') {
    return (
      <B.ButtonSecondary size={size} shadow={shadow} onClick={onClick}>
        {label}
      </B.ButtonSecondary>
    )
  }
  if (type === 'tertiary') {
    return (
      <ButtonTertiary size={size} shadow={shadow} onClick={onClick}>
        {label}
      </ButtonTertiary>
    )
  }
  if (type === 'primary') {
    return (
      <B.ButtonPrimary size={size} shadow={shadow} onClick={onClick}>
        {label}
      </B.ButtonPrimary>
    )
  }
  return (
    <B.ButtonPrimary size={size} shadow={shadow} onClick={onClick}>
      {label}
    </B.ButtonPrimary>
  )
}
