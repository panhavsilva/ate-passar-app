import styled from 'styled-components'
import chroma from 'chroma-js'
import Select, { StylesConfig } from 'react-select'

type SelectProps = {
  className?: string;
  label?: string;
}

type ColourOption = {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const colourOptions: readonly ColourOption[] = [
  { value: 'amarelo', label: 'Amarelo', color: '#FFA92c' },
  { value: 'anil', label: 'Anil', color: '#281AC8' },
  { value: 'Azul', label: 'Azul', color: '#00B8D9' },
  { value: 'cinza', label: 'Cinza', color: '#858585' },
  { value: 'laranja', label: 'Laranja', color: '#FF8828' },
  { value: 'purpura', label: 'Púrpura', color: '#6F1265' },
  { value: 'rosa', label: 'Rosa', color: '#FD749B' },
  { value: 'roxo', label: 'Roxo', color: '#B327F5' },
  { value: 'verde', label: 'Verde', color: '#5DF888' },
  { value: 'vermelho', label: 'Vermelho', color: '#FF4949' },
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

const optionStyles: StylesConfig<ColourOption> = {
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
        ? '#F0F0F0'
        : isSelected
          ? chroma.contrast(color, '#fff') > 2
            ? '#fff'
            : '#858585'
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
  singleValue: (styles, { data }) => ({
    ...styles,
    ...dot(data.color),
  }),
}

const Label = styled.label`
  color: ${(props) => props.theme.colors.gray};
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 16px;
  padding: 8px 0px;
`
const ContainerSelect = styled.div`
  display: grid;
  grid-template-columns: 114px 1fr;
`

const SelectColorsRaw = ({ className, label }: SelectProps) => {
  if (label) {
    return (
      <ContainerSelect>
        <Label>{label}</Label>
        <Select
          defaultValue={colourOptions[0]}
          options={colourOptions}
          classNamePrefix='react-select'
          className={className}
          styles={optionStyles}
        />
      </ContainerSelect>
    )
  }
  return (
    <Select
      defaultValue={colourOptions[0]}
      options={colourOptions}
      classNamePrefix='react-select'
      className={className}
      styles={optionStyles}
    />
  )
}

export const SelectColors = styled(SelectColorsRaw)`
  font-size: 12px;
  .react-select__control {
    background: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.lightGray};
    border-radius: 100px;
    box-shadow: none;
    color: ${(props) => props.theme.colors.gray};
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    height: 35px;
    line-height: 24px;
    width: 285px;

    :hover {
    border: 1px solid ${(props) => props.theme.colors.purple};
  }
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__menu {
    border: 1px solid ${(props) => props.theme.colors.lightGray};
    border-radius: 8px;
    box-shadow: none;
    width: 285px;
  }
  .react-select__menu-list {
    border: none;
    color: ${(props) => props.theme.colors.gray};
    font-size: 12px;
    margin: 8px 0px 0px 0px;
    padding: 8px 0px;
    width: 100%;
  }
  .react-select__placeholder {
    color: ${(props) => props.theme.colors.lightGray};
    font-size: 12px;
  }
  .react-select__single-value {
    color: ${(props) => props.theme.colors.gray};
    font-size: 12px;
  }
`
