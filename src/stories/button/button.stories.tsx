import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  type: 'primary',
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  type: 'red',
  size: 'small',
  label: '>',
}
