import styled from 'styled-components/macro'

type TextareaProps = {
  placeholder: string,
  label: string,
}

const Textarea = styled.textarea`
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 10px;
  color: ${(props) => props.theme.colors.gray};
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  width: 288px;
  min-height: 125px;
  padding: 8px;
  resize: none;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.purple};
  }
`
const Label = styled.label`
  color: ${(props) => props.theme.colors.gray};
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 16px;
  padding: 8px 0px;
`
const ContainerTextearea = styled.div`
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
