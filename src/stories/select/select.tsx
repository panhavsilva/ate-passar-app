import Select from 'react-select'
import { theme } from '../../resources/theme'

export type Options = {
  value: string,
  label: string,
}

export type SelectProps = {
  options: Options[],
  placeholder: string,
}

const customStylesDefault = {
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
    width: '288px',
  }),
  placeholder: () => ({
    marginLeft: '4px',
  }),
  indicatorSeparator: () => ({
    border: 'none',
  }),
  menu: () => ({
    width: '288px',
  }),
  menuList: () => ({
    border: `1px solid ${theme.colors.lightGray}`,
    borderRadius: '8px',
    color: `${theme.colors.gray}`,
    fontSize: '12px',
    margin: '8px 0px 0px 0px',
    padding: '8px 0px',
    width: '100%',
  }),
  singleValue: () => ({
    color: `${theme.colors.purple}`,
    fontSize: '12px',
    marginLeft: '4px',
  }),
  input: () => ({
    display: 'none',
  }),
}

const customStylesFooter = {
  control: () => ({
    background: `${theme.colors.white}`,
    border: 'none',
    borderRadius: '12px',
    color: `${theme.colors.gray}`,
    display: 'flex',
    fontFamily: '"Poppins", sans- serif',
    fontSize: '14px',
    height: '40px',
    width: '222px',
  }),
  indicatorSeparator: () => ({
    border: 'none',
  }),
  menu: () => ({
    width: '222px',
  }),
  menuList: () => ({
    color: `${theme.colors.gray}`,
    fontSize: '14px',
    margin: '8px 0px 0px 0px',
    width: '100%',
  }),
  placeholder: () => ({
    marginLeft: '4px',
  }),
  singleValue: () => ({
    color: `${theme.colors.purple}`,
    fontSize: '14px',
    marginLeft: '4px',
  }),
  input: () => ({
    display: 'none',
  }),
}

export const SelectFooter = ({ options, placeholder }: SelectProps) => (
  <Select
    styles={customStylesFooter}
    placeholder={placeholder}
    options={options}
    theme={(t) => ({
      ...t,
      colors: {
        ...t.colors,
        primary25: `${theme.colors.lightPurple}`,
        primary: `${theme.colors.purple}`,
      },
    })}
  />
)

export const SelectDefault = ({ options, placeholder }: SelectProps) => (
  <Select
    styles={customStylesDefault}
    placeholder={placeholder}
    options={options}
    theme={(t) => ({
      ...t,
      colors: {
        ...t.colors,
        primary25: `${theme.colors.lightPurple}`,
        primary: `${theme.colors.purple}`,
      },
    })}
  />
)
