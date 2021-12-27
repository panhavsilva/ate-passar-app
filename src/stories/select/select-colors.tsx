import chroma from 'chroma-js'
import { theme } from '../../resources/theme'
import Select, { StylesConfig } from 'react-select'

type ColourOption = {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const colourOptions: readonly ColourOption[] = [
  { value: 'amarelo', label: 'Amarelo', color: '#FFA92c' },
  { value: 'anil', label: 'Anil', color: `${theme.colors.secondary}` },
  { value: 'Azul', label: 'Azul', color: '#00B8D9' },
  { value: 'cinza', label: 'Cinza', color: `${theme.colors.gray}` },
  { value: 'laranja', label: 'Laranja', color: '#FF8828' },
  { value: 'purpura', label: 'Púrpura', color: `${theme.colors.darkPurple}` },
  { value: 'rosa', label: 'Rosa', color: `${theme.colors.primary}` },
  { value: 'roxo', label: 'Roxo', color: `${theme.colors.purple}` },
  { value: 'verde', label: 'Verde', color: `${theme.colors.green}` },
  { value: 'vermelho', label: 'Vermelho', color: `${theme.colors.red}` },
]

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
})

const colourStyles: StylesConfig<ColourOption> = {
  control: () => ({
    background: `${theme.colors.white}`,
    border: `1px solid ${theme.colors.lightGray}`,
    borderRadius: '100px',
    color: `${theme.colors.gray}`,
    display: 'flex',
    fontFamily: '"Poppins", sans- serif',
    fontSize: '12px',
    height: '35px',
    lineHeight: '24px',
    width: '285px',
  }),
  indicatorSeparator: () => ({
    border: 'none',
  }),
  menu: () => ({
    width: '285px',
  }),
  menuList: () => ({
    border: `1px solid ${theme.colors.lightGray}`,
    borderRadius: '8px',
    fontSize: '12px',
    margin: '8px 0px 0px 0px',
    padding: '8px 0px',
    width: '100%',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : undefined,
      color: isDisabled
        ? `${theme.colors.lightGray}`
        : isSelected
          ? chroma.contrast(color, `${theme.colors.white}`) > 2
            ? `${theme.colors.white}`
            : `${theme.colors.gray}`
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    }
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({
    ...styles,
    ...dot(`${theme.colors.lightGray}`),
    fontSize: '12px',
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...dot(data.color),
    color: `${theme.colors.gray}`,
    fontSize: '12px',
  }),
}

export const SelectColors = () => (
  <Select
    defaultValue={colourOptions[2]}
    options={colourOptions}
    styles={colourStyles}
  />
)
