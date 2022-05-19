import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Tab, TabProps } from "../components/Tab"

export default {
    title: 'Tab/Tab',
    component: Tab
} as ComponentMeta<typeof Tab>


const Template: ComponentStory<typeof Tab> = (args: TabProps) => <Tab {...args} />

export const Tab1 = Template.bind({})

Tab1.args = {
    content: [
    {
      title: "Tab 1",
      text: "Texto da tab 1"
    },
    {
      title: "Tab 2",
      text: "Texto da tab 2"
    },
    {
      title: "Tab 3",
      text: "Texto da tab 3"
    },
    {
      title: "Tab 4",
      text: "Texto da tab 4"
    },
    {
      title: "Tab 5",
      text: "Texto da tab 5"
    }
  ],
  tabTitle: 'Tab em React!'
};