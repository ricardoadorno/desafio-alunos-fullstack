import type { Meta, StoryObj } from '@storybook/vue3'
import MyTypography from '@/components/atoms/MyTypography.vue'

const meta = {
  title: 'Atoms/MyTypography',
  component: MyTypography,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['heading1', 'heading2', 'heading3', 'body', 'caption']
    }
  }
} satisfies Meta<typeof MyTypography>

export default meta
type Story = StoryObj<typeof meta>

export const Default = (args: unknown) => ({
  components: { MyTypography },
  setup() {
    return { args }
  },
  template: '<MyTypography v-bind="args">Lorem Ipson</MyTypography>'
})
