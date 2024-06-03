import type { Meta, StoryObj } from '@storybook/vue3'
import MyTextInput from '@/components/atoms/MyTextInput.vue'

const meta = {
  title: 'Atoms/MyTextInput',
  component: MyTextInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof MyTextInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default = () => ({
  components: { MyTextInput },
  template: '<MyTextInput v-bind="args">Primary</MyTextInput>'
})
