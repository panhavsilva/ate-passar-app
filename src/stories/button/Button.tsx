import { ButtonPrimary, ButtonDefault, ButtonRed } from './button-style'

type ButtonProps = {
  type?: 'primary' | 'red';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  type = 'primary',
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  if (type === 'primary') {
    return (
      <ButtonPrimary
        type='button'
        className={[`button--${size}`].join(' ')}
        {...props}
      >
        {label}
      </ButtonPrimary>
    )
  }
  if (type === 'red') {
    return (
      <ButtonRed
        type='button'
        className={[`button--${size}`].join(' ')}
        {...props}
      >
        {label}
      </ButtonRed>
    )
  }
  return (
    <ButtonDefault
      type='button'
      className={[`button--${size}`].join(' ')}
      {...props}
    >
      {label}
    </ButtonDefault>
  )
}
