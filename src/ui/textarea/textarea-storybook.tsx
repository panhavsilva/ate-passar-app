import { TextareaDefault } from './textarea'

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
