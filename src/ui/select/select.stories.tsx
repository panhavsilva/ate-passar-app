import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeStyleDecorator } from 'resources/storybook-decorators'
import { SelectStorybook } from './select-storybook'

export default {
  title: 'Example/Select',
  component: SelectStorybook,
  decorators: [themeStyleDecorator],
} as ComponentMeta<typeof SelectStorybook >

const data = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const Template: ComponentStory<typeof SelectStorybook> = (args) => <SelectStorybook {...args} />

export const Select = Template.bind({})
Select.args = {
  type: 'default',
  options: data,
  placeholder: 'Matéria',
}
