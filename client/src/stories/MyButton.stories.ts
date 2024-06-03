import type { Meta, StoryObj } from '@storybook/vue3'
import MyButton from '@/components/atoms/MyButton.vue'

const meta = {
  title: 'Atoms/MyButton',
  component: MyButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning', 'info']
    }
  }
} satisfies Meta<typeof MyButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = (args: unknown) => ({
  components: { MyButton },
  setup() {
    return { args }
  },
  template: '<MyButton v-bind="args">Primary</MyButton>'
})
