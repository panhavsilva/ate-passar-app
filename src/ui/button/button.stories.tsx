import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeStyleDecorator } from 'resources/storybook-decorators'
import { ButtonStorybook } from './button-storybook'

export default {
  title: 'Example/Button',
  component: ButtonStorybook,
  decorators: [themeStyleDecorator],
} as ComponentMeta<typeof ButtonStorybook>

const Template: ComponentStory<typeof ButtonStorybook> = (args) => <ButtonStorybook {...args} />

export const Button = Template.bind({})
Button.args = {
  type: 'primary',
  size: 'medium',
  shadow: 'off',
  label: 'Button',
}
