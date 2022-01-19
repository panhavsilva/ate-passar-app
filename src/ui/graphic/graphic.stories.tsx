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

const data = {
  mon: 120,
  tues: 60,
  wed: 90,
  thur: 30,
  fri: 70,
  sat: 150,
  sun: 130,
}

export const Graphic = Template.bind({})
Graphic.args = {
  title: 'Últimos 7 dias',
  xAxis: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  yAxis: ['02:00', '01:30', '01:00', '00:30'],
  data: data,
}
