import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TextareaStorybook } from './textarea-storybook'

export default {
  title: 'Example/Textarea',
  component: TextareaStorybook,
} as ComponentMeta<typeof TextareaStorybook >

const Template: ComponentStory<typeof TextareaStorybook> = (args) => {
  return (
    <TextareaStorybook {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Faça suas anotações aqui!',
}

export const Label = Template.bind({})
Label.args = {
  placeholder: 'Faça suas anotações aqui!',
  label: 'Anotações',
}
