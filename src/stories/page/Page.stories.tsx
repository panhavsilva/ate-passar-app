import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Page } from './Page'
import * as HeaderStories from '../header/Header.stories'

export default {
  title: 'Example/Page',
  component: Page,
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = () => <Page />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
}
