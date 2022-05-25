import { Story, Meta } from '@storybook/angular/types-6-0';
import TabComponent from './tab.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Tab/Tab',
  component: TabComponent,
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TabComponent> = (args: TabComponent) => ({
  props: args,
});

export const Tab1 = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
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
      tabTitle: "Tab em Angular!"
};