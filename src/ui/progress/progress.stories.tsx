import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeStyleDecorator } from 'resources/storybook-decorators'
import { ProgressStorybook } from './progress-storybook'

export default {
  title: 'Example/Progress',
  component: ProgressStorybook,
  decorators: [themeStyleDecorator],
} as ComponentMeta<typeof ProgressStorybook>

const Template: ComponentStory<typeof ProgressStorybook> = (args) => {
  return (
    <ProgressStorybook {...args} />
  )
}

const data = {
  all: 10,
  completed: 5,
  date: new Date(),
}

export const Progress = Template.bind({})
Progress.args = {
  size: 'small',
  data: data,
}
