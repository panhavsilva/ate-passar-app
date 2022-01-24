import { Graphic, GraphicProps } from './graphic'

export const GraphicStorybook = ({
  title,
  xAxis,
  data,
  size,
}: GraphicProps) => {
  return (
    <Graphic size={size} title={title} xAxis={xAxis} data={data} />
  )
}
