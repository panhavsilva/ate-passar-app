import * as T from './textarea-style'

type TextareaProps = {
  placeholder: string,
  label: string,
}

export const TextareaDefault = ({ placeholder, label }: TextareaProps) => {
  return (
    <T.ContainerTextearea>
      <T.Label>{label}</T.Label>
      <T.Textarea
        maxLength={200}
        placeholder={placeholder}
      />
    </T.ContainerTextearea>
  )
}
