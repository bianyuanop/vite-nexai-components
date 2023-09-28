import React from 'react'
import { Assistant, assistantProp } from '.'
import { objectValuesToControls } from '../../../storybook-utils'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

const meta: Meta<typeof Assistant> = {
  title: 'Assistant',
  component: Assistant,
  argTypes: {
    companyName: {
      control: 'text',
    },
    companyId: {
      control: 'number',
    },
    color: {
      control: 'text',
    },
  },
}

export default meta

const Template: StoryFn<typeof Assistant> = (args: assistantProp) => <Assistant {...args} />

export const Example = Template.bind({})
Example.args = {
  companyName: 'test',
  companyId: 0,
  color: 'blue',
}
