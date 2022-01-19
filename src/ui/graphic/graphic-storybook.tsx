import { Graphic, GraphicProps } from './graphic'

export const GraphicStorybook = ({
  title,
  xAxis,
  yAxis,
  data,
}: GraphicProps) => {
  return (
    <Graphic title={title} xAxis={xAxis} yAxis={yAxis} data={data} />
  )
}
