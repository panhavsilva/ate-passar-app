import Select from 'react-select'
import styled, { useTheme } from 'styled-components'

export type Options = {
  value: string,
  label: string,
}

export type SelectProps = {
  options: Options[],
  placeholder: string,
  className?: string,
}

export const SelectDefaultRaw = ({ options, placeholder, className }: SelectProps) => {
  const theme = useTheme()

  return (
    <Select
      classNamePrefix='react-select'
      className={className}
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
}

export const SelectFooter = styled(SelectDefaultRaw)`
  background: ${(props) => props.theme.colors.white};
  border-radius: 100px;
  font-size: 14px;
  height: 40px;
  width: 222px;

  .react-select__control {
    border: none;
    border-radius: 100px;
    box-shadow: none;
    color: ${(props) => props.theme.colors.gray};
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__menu {
    border: none;
    box-shadow: none;
    width: 222px;
  }
  .react-select__menu-list {
    border: none;
    box-shadow: none;
    color: ${(props) => props.theme.colors.gray};
    font-size: 14px;
    margin: 8px 0px 0px 0px;
    width: 100%;
  }
  .react-select__placeholder {
    color: ${(props) => props.theme.colors.gray};
    font-size: 14px;
    margin-left: 4px;
  }
  .react-select__single-value {
    color: ${(props) => props.theme.colors.purple};
    font-size: 14px;
    margin-left: 4px;
  }
`
export const SelectDefault = styled(SelectDefaultRaw)`
  background: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 100px;
  color: ${(props) => props.theme.colors.gray};
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  height: 35px;
  line-height: 24px;
  width: 288px;

  .react-select__control {
    box-shadow: none;
    border: 1px solid ${(props) => props.theme.colors.lightGray};
    border-radius: 100px;
    color: ${(props) => props.theme.colors.gray};
    font-size: 12px;

    :hover {
    border: 1px solid ${(props) => props.theme.colors.purple};
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__menu {
    border: none;
    box-shadow: none;
    width: 288px;
  }
  .react-select__menu-list {
    border: 1px solid ${(props) => props.theme.colors.lightGray};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.gray};
    font-size: 12px;
    margin: 8px 0px 0px 0px;
    padding: 8px 0px;
    width: 100%;
  }
  .react-select__placeholder {
    color: ${(props) => props.theme.colors.gray};
    font-size: 12px;
    margin-left: 4px;
  }
  .react-select__single-value {
    color: ${(props) => props.theme.colors.purple};
    font-size: 12px;
    margin-left: 4px;
  }
`
