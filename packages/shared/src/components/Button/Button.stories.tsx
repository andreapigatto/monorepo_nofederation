import { Story, Meta } from '@storybook/react'

import Button, { ComponentProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<ComponentProps> = ({ ...props }) => (
  <Button {...props}>{props.children}</Button>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Test Button',
}
