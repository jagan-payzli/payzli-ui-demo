// src/components/IconButton.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import IconButton from "./IconButton"; // Adjust the import path as needed
import { IIconButtonProps } from "../../models/IIconButton";

export default {
	title: "Components/IconButton",
	component: IconButton
} as Meta;

const Template: StoryFn<IIconButtonProps> = (args: IIconButtonProps) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	onClick: (event: any) => console.log("Primary IconButton Clicked", event),
	variant: "primary",
	size: "medium",
	buttonType: "button",
	children: <span>$</span> // Replace with an actual icon component or content
};

export const Secondary = Template.bind({});
Secondary.args = {
	onClick: (event: any) => console.log("Secondary IconButton Clicked", event),
	variant: "secondary",
	size: "medium",
	buttonType: "button",
	children: <span>$</span> // Replace with an actual icon component or content
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	onClick: (event: any) => console.log("Tertiary IconButton Clicked", event),
	variant: "tertiary",
	size: "medium",
	buttonType: "button",
	children: <span>$</span> // Replace with an actual icon component or content
};

export const Disabled = Template.bind({});
Disabled.args = {
	onClick: (event: any) => console.log("Disabled IconButton Clicked", event),
	variant: "primary",
	size: "medium",
	buttonType: "button",
	disabled: true,
	children: <span>$</span> // Replace with an actual icon component or content
};

export const CustomSize = Template.bind({});
CustomSize.args = {
	onClick: (event: any) => console.log("Custom Size IconButton Clicked", event),
	variant: "primary",
	size: "large",
	buttonType: "button",
	children: <span>$</span> // Replace with an actual icon component or content
};

export const ButtonAsText = Template.bind({});
ButtonAsText.args = {
	onClick: (event: any) => console.log("Text IconButton Clicked", event),
	variant: "none",
	size: "medium",
	buttonType: "text",
	children: <span>$</span> // Replace with an actual icon component or content
};
