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
  allSubjects: 10,
  completedSubjects: 5,
  date: '31/10/2021',
}

export const Progress = Template.bind({})
Progress.args = {
  size: 'small',
  data: data,
}
