import styled from 'styled-components/macro'
import { theme } from '../../resources/theme'

type TextareaProps = {
  placeholder: string,
  label: string,
}

export const Textarea = styled.textarea`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 10px;
  color: ${theme.colors.gray};
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  width: 288px;
  min-height: 125px;
  padding: 8px;
  resize: none;

  &:focus {
    outline: none;
    border: 1px solid ${theme.colors.lightPurple};
  }
`
export const Label = styled.label`
  color: ${theme.colors.gray};
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 16px;
  padding: 8px 0px;
`
export const ContainerTextearea = styled.div`
  display: grid;
  grid-template-columns: 114px 1fr;
`

export const TextareaDefault = ({ placeholder, label }: TextareaProps) => {
  return (
    <ContainerTextearea>
      <Label>{label}</Label>
      <Textarea
        maxLength={200}
        placeholder={placeholder}
      />
    </ContainerTextearea>
  )
}
