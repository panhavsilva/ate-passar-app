import { Graphic, GraphicProps } from './graphic'

export const GraphicStorybook = ({
  title,
  data,
  size,
}: GraphicProps) => {
  return (
    <Graphic size={size} title={title} data={data} />
  )
}
