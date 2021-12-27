import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SelectStorybook, SelectColor } from './select-storybook'

export default {
  title: 'Example/Select',
  component: SelectStorybook,
} as ComponentMeta<typeof SelectStorybook >

const data = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const Template: ComponentStory<typeof SelectStorybook> = (args) => <SelectStorybook {...args} />
const Template2: ComponentStory<typeof SelectColor> = () => <SelectColor />

export const SelectFooter = Template.bind({})
SelectFooter.args = {
  type: 'footer',
  options: data,
  placeholder: 'Matéria',
}

export const SelectDefault = Template.bind({})
SelectDefault.args = {
  type: 'default',
  options: data,
  placeholder: 'Matéria',
}

export const SelectColors = Template2.bind({})
