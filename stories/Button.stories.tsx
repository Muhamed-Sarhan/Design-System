import React from "react";
import { Meta, Story } from "@storybook/react";
import { FiStar, FiArrowRight } from "react-icons/fi";
import { Button, ButtonProps } from "../src/Button";
import { Figma } from "../src/data/figma";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Button",
  component: Button,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Button,
    },
  },
};

export default meta;

interface Props extends ButtonProps {
  darkMode: boolean;
}

const StoryButton: Story<Props> = (args) => (
  <StoryLayout {...args} className="space-y-2">
    <Button {...args}>Button CTA</Button>

    <Button {...args} LeadingIcon={<FiStar />}>
      Button CTA
    </Button>

    <Button {...args} TrailingIcon={<FiArrowRight />}>
      Button CTA
    </Button>

    <Button {...args} IconOnly={<FiArrowRight />} />
  </StoryLayout>
);

export const Default = StoryButton.bind({});

Default.args = {
  variant: "primary",
  size: "md",
  darkMode: false,
  disabled: false,
};

Default.parameters = {
  controls: { exclude: ["LeadingIcon", "TrailingIcon", "IconOnly"] },
};
