// src/components/Button.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button"; // Adjust the import path as needed
import { IButtonProps } from "../../models/IButtonProps";

// Example icon components (use your actual icon components)
const LeftIcon = () => <span>🔙</span>;
const RightIcon = () => <span>➡️</span>;
const BothIcons = () => (
	<>
		<span>🔙</span>
		<span>➡️</span>
	</>
);

export default {
	title: "Components/Button",
	component: Button
} as Meta;

const Template: StoryFn<IButtonProps> = (args: IButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	onClick: (event: any) => alert("Primary Button Clicked"),
	label: "Primary Button",
	variant: "primary",
	size: "medium",
	buttonType: "button"
};

export const Secondary = Template.bind({});
Secondary.args = {
	onClick: (event: any) => alert("Secondary Button Clicked"),
	label: "Secondary Button",
	variant: "secondary",
	size: "medium",
	buttonType: "button"
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	onClick: (event: any) => alert("Tertiary Button Clicked"),
	label: "Tertiary Button",
	variant: "tertiary",
	size: "medium",
	buttonType: "button"
};

export const Disabled = Template.bind({});
Disabled.args = {
	onClick: (event: any) => alert("Disabled Button Clicked"),
	label: "Disabled Button",
	variant: "primary",
	size: "medium",
	buttonType: "button",
	disabled: true
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
	onClick: (event: any) => alert("Button with Left Icon Clicked"),
	label: "Button with Left Icon",
	variant: "primary",
	size: "medium",
	buttonType: "button",
	leftIcon: <LeftIcon />,
	iconPosition: "left"
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
	onClick: (event: any) => alert("Button with Right Icon Clicked"),
	label: "Button with Right Icon",
	variant: "primary",
	size: "medium",
	buttonType: "button",
	rightIcon: <RightIcon />,
	iconPosition: "right"
};

export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
	onClick: (event: any) => alert("Button with Both Icons Clicked"),
	label: "Button with Both Icons",
	variant: "primary",
	size: "medium",
	buttonType: "button",
	iconComp: <BothIcons />,
	iconPosition: "both"
};

export const LinkButton = Template.bind({});
LinkButton.args = {
	onClick: (event: any) => alert("Link Button Clicked"),
	label: "Link Button",
	variant: "primary",
	size: "medium",
	buttonType: "link"
};
