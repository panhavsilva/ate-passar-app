import { SelectFooter, SelectDefault, Options } from './select'
import { SelectColors } from './select-colors'

type SelectPropsStoryBook = {
  type: 'footer' | 'default' | 'color',
  options: Options[],
  label?: string,
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
  label,
}: SelectPropsStoryBook) => {
  if (type === 'footer') {
    return (
      <SelectFooter
        options={options}
        placeholder={placeholder}
        label={label}
      />
    )
  }
  if (type === 'default') {
    return (
      <SelectDefault
        options={options}
        placeholder={placeholder}
        label={label}
      />
    )
  }
  if (type === 'color') {
    return (
      <SelectColors
        label={label}
      />
    )
  }
  return (
    <SelectDefault
      options={options}
      placeholder={placeholder}
      label={label}
    />
  )
}
