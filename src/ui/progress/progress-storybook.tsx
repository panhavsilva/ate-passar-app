import { Progress, ProgressProps } from './progress'

export const ProgressStorybook = ({
  size,
  data,
}: ProgressProps) => {
  return (
    <Progress size={size} data={data} />
  )
}
