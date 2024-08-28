// src/components/HideComponentWrapper.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import HideComponentWrapper from "./HideComponentWrapper"; // Adjust the import path as needed
import { IHideComponentWrapper } from "../../models/IHideComponentWrapper";

export default {
	title: "Components/HideComponentWrapper",
	component: HideComponentWrapper
} as Meta;

const Template: StoryFn<IHideComponentWrapper> = (args: IHideComponentWrapper) => <HideComponentWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: <div>Default Content</div>
};

export const Hidden = Template.bind({});
Hidden.args = {
	children: <div>Hidden Content</div>,
	hidden: true
};

export const Show = Template.bind({});
Show.args = {
	children: <div>Visible Content</div>,
	show: true
};

export const NoPermission = Template.bind({});
NoPermission.args = {
	children: <div>Permission Error Content</div>,
	noPermission: true,
	label: "You do not have permission to view this content."
};

export const WithLabel = Template.bind({});
WithLabel.args = {
	children: <div>Content with Label</div>,
	label: "This is a label for the content."
};
