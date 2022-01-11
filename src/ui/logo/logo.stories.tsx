import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeStyleDecorator } from 'resources/storybook-decorators'
import { LogoStorybook } from './logo-storybook'

export default {
  title: 'Example/Logo',
  component: LogoStorybook,
  decorators: [themeStyleDecorator],
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof LogoStorybook >

const Template: ComponentStory<typeof LogoStorybook> = (args) => <LogoStorybook {...args} />

export const Logo = Template.bind({})
Logo.args = {
  size: 'small',
}
