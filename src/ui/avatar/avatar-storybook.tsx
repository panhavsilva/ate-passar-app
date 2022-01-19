import { Avatar, AvatarProps } from './avatar'

export const AvatarStorybook = ({
  src,
  userName,
}: AvatarProps) => {
  return (
    <Avatar src={src} userName={userName} />
  )
}
