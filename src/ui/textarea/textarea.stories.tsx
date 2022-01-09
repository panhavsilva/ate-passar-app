import { ComponentMeta, ComponentStory } from '@storybook/react'
import { themeStyleDecorator } from 'resources/storybook-decorators'
import { TextareaStorybook } from './textarea-storybook'

export default {
  title: 'Example/Textarea',
  component: TextareaStorybook,
  decorators: [themeStyleDecorator],
} as ComponentMeta<typeof TextareaStorybook >

const Template: ComponentStory<typeof TextareaStorybook> = (args) => {
  return (
    <TextareaStorybook {...args} />
  )
}

export const Textarea = Template.bind({})
Textarea.args = {
  placeholder: 'Faça suas anotações aqui!',
  label: 'Anotações',
}
