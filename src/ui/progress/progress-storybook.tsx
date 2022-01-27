import { Progress, ProgressProps } from './progress'

export const ProgressStorybook = ({
  size,
  title,
}: ProgressProps) => {
  return (
    <Progress size={size} title={title} />
  )
}
