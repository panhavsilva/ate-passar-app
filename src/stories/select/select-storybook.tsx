import { SelectFooter, SelectDefault, Options } from './select'
import { SelectColors } from './select-colors'

type SelectPropsStoryBook = {
  type: 'footer' | 'default',
  options: Options[],
  placeholder: string,
}

const data = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export const SelectStorybook = ({
  type = 'default',
  options = data,
  placeholder = 'Matéria',
}: SelectPropsStoryBook) => {
  if (type === 'footer') {
    return (
      <SelectFooter
        options={options}
        placeholder={placeholder}
      />
    )
  }
  if (type === 'default') {
    return (
      <SelectDefault
        options={options}
        placeholder={placeholder}
      />
    )
  }
  return (
    <SelectDefault
      options={options}
      placeholder={placeholder}
    />
  )
}

export const SelectColor = () => <SelectColors />
