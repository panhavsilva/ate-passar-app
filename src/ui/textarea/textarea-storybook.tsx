import { TextareaDefault } from './textarea-style'

type TextareaPropsStoryBook = {
  placeholder: string,
  label: string,
}

export const TextareaStorybook = ({
  placeholder = 'Faça suas anotações aqui!',
  label = 'Matéria',
}: TextareaPropsStoryBook) => {
  return (
    <TextareaDefault
      placeholder={placeholder}
      label={label}
    />
  )
}
