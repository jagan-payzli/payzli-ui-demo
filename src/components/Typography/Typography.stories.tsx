// src/components/Typography.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Typography from "./Typography"; // Adjust the import path as needed
import { ITypography } from "../../models/ITypography";

export default {
	title: "Components/Typography",
	component: Typography
} as Meta;

const Template: StoryFn<ITypography> = (args: ITypography) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: "Default Typography"
};

export const Heading = Template.bind({});
Heading.args = {
	children: "Heading 1",
	size: "xl",
	type: "heading",
	color: "primary",
	fontFamily: "bold"
};

export const LargeText = Template.bind({});
LargeText.args = {
	children: "Large Text Example",
	size: "lg",
	type: "text",
	color: "secondary"
};

export const ColoredText = Template.bind({});
ColoredText.args = {
	children: "Colored Text Example",
	size: "md",
	type: "text",
	color: "brand_primary"
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
	children: "Custom Styled Text",
	size: "sm",
	type: "text",
	color: "error_primary",
	fontFamily: "medium",
	style: { fontStyle: "italic", textDecoration: "underline" }
};

export const AllVariations = () => (
	<div>
		<Typography size="xs" color="placeholder">
			Extra Small Placeholder
		</Typography>
		<Typography size="sm" color="secondary">
			Small Secondary
		</Typography>
		<Typography size="md" color="primary">
			Medium Primary
		</Typography>
		<Typography size="lg" color="success_primary">
			Large Success
		</Typography>
		<Typography size="xl" color="warning_primary">
			Extra Large Warning
		</Typography>
		<Typography size="xxl" color="muted">
			XXL Muted
		</Typography>
		<Typography size="xxxl" color="white">
			XXXL White
		</Typography>
	</div>
);
