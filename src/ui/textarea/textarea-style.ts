import styled from 'styled-components/macro'

export const Textarea = styled.textarea`
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
export const Label = styled.label`
  color: ${(props) => props.theme.colors.gray};
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 16px;
  padding: 8px 0px;
`
export const ContainerTextearea = styled.div`
  display: grid;
  grid-template-columns: 114px 1fr;
`
