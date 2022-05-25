//import { ComponentMeta, ComponentStory } from "@storybook/vue3";
import Tab  from "./Tab.vue";

export default {
  title: "Tab/Tab",
  component: Tab,
};


const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Tab },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<tab v-bind="args" />',
});

export const Tab1 = Template.bind({});

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
    }
  ],
  tabTitle: "Tab em Vue!"
};

export const Tab2 = Template.bind({});

Tab2.args = {
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
  ],
  tabTitle: "Tab 2 em Vue!"
};