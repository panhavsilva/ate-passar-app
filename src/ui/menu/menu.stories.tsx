import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeStyleDecorator } from 'resources/storybook-decorators'
import { MenuItemStorybook } from './menu-storybook'

export default {
  title: 'Example/Menu',
  component: MenuItemStorybook,
  decorators: [themeStyleDecorator],
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
} as ComponentMeta<typeof MenuItemStorybook >

const Template: ComponentStory<typeof MenuItemStorybook> = (args) => {
  return (
    <MenuItemStorybook {...args} />
  )
}

export const Menu = Template.bind({})
Menu.args = {
  children: 'Cadendário',
  alt: 'Ilustração de um calendário',
  active: false,
}
