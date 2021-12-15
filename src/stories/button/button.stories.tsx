import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ButtonStorybook } from './button-storybook'

export default {
  title: 'Example/Button',
  component: ButtonStorybook,
} as ComponentMeta<typeof ButtonStorybook>

const Template: ComponentStory<typeof ButtonStorybook> = (args) => <ButtonStorybook {...args} />

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'extraSmall',
  shadow: 'off',
  label: 'B',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  shadow: 'off',
  label: 'But',
}

export const Midium = Template.bind({})
Midium.args = {
  size: 'medium',
  shadow: 'off',
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  shadow: 'off',
  label: 'Button Large',
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  size: 'extraLarge',
  shadow: 'off',
  label: 'Button Extra Large',
}
