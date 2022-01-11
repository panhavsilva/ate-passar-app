import { Avatar, AvatarProps } from './avatar-style'

export const AvatarStorybook = ({
  src,
  userName,
}: AvatarProps) => {
  return (
    <Avatar src={src} userName={userName} />
  )
}
