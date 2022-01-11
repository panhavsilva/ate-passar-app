import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeStyleDecorator } from 'resources/storybook-decorators'
import { AvatarStorybook } from './avatar-storybook'

export default {
  title: 'Example/Avatar',
  component: AvatarStorybook,
  decorators: [themeStyleDecorator],
} as ComponentMeta<typeof AvatarStorybook>

const Template: ComponentStory<typeof AvatarStorybook> = (args) => <AvatarStorybook {...args} />

export const Avatar = Template.bind({})
Avatar.args = {
  userName: 'Nome do usuário',
  src: 'https://images.unsplash.com/photo-1583123810721-5a8e229a480b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
}
