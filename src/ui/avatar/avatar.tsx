import * as A from './avatar-style'

export type AvatarProps = {
  src: string,
  userName: string,
}

export const Avatar = ({ src, userName }: AvatarProps) => {
  return (
    <A.Container>
      <A.Img src={src} alt={`Avatar do usuário ${userName}`} />
      <A.UserName>{userName}</A.UserName>
    </A.Container>
  )
}
