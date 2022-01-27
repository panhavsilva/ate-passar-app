import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeStyleDecorator } from 'resources/storybook-decorators'
import { GraphicStorybook } from './graphic-storybook'

export default {
  title: 'Example/Graphic',
  component: GraphicStorybook,
  decorators: [themeStyleDecorator],
} as ComponentMeta<typeof GraphicStorybook>

const Template: ComponentStory<typeof GraphicStorybook> = (args) => {
  return (
    <GraphicStorybook {...args} />
  )
}

const data = [
  { label: 'Seg', value: 7200 },
  { label: 'Ter', value: 3600 },
  { label: 'Qua', value: 5400 },
  { label: 'Qui', value: 9000 },
  { label: 'Sex', value: 6480 },
  { label: 'Sáb', value: 9720 },
  { label: 'Dom', value: 1800 },
]

export const Graphic = Template.bind({})
Graphic.args = {
  size: 'large',
  title: 'Últimos 7 dias',
  data: data,
}
