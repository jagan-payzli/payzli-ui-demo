import React from "react";
import { Heart } from "@phosphor-icons/react";
import { Meta, StoryObj } from "@storybook/react";
import { IconButton, IIconButtonProps } from "../../main"; // Adjust the import path as needed

export default {
	title: "payzli-ui/Components/buttons/IconButton",
	component: IconButton,
	tags: ["autodocs", "test"],
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered"
	},
	argTypes: {
		onClick: {
			action: "onClick",
			table: {
				type: { summary: "function" },
				defaultValue: { summary: "(event: React.MouseEvent<HTMLButtonElement>) => void" }
			}
		},

		variant: {
			control: { type: "inline-radio" },
			options: ["primary", "secondary", "tertiary", "none"],
			description: "The button's visual style variant."
		},
		className: {
			control: { type: "text" }
		},
		buttonType: {
			control: { type: "radio" },
			options: ["button", "text"],
			description: "Specifies the button's type."
		},
		size: {
			control: { type: "text" },
			description: "Define icon size in px or rem etc."
		},
		id: {
			control: { type: "text" }
		},
		disabled: {
			control: { type: "boolean" },
			description: "Disables the button when true.",
			table: { summary: "boolean", defaultValue: { summary: "false" } }
		},

		children: {
			control: { type: "object" },
			description: "Icon/Image to render inside the button.",
			table: { summary: "React.ReactNode" }
		},
		ref: {
			control: { type: "object" },
			description: "Ref for the button component.",
			table: { summary: "React.Ref<any>" }
		}
	}
} as Meta<IIconButtonProps>;
type Story = StoryObj<IIconButtonProps>;

export const Primary: Story = {
	name: "Primary Button",
	args: {
		onClick: (event: any) => alert("Primary Button Clicked"),
		variant: "primary",
		size: "medium",
		buttonType: "button"
	},
	render: (args) => (
		<IconButton {...args}>
			<Heart size={32} />
		</IconButton>
	)
};

export const Secondary: Story = {
	name: "Secondary Button",
	args: {
		onClick: (event: any) => alert("Secondary Button Clicked"),
		variant: "secondary",
		size: "medium",
		buttonType: "button"
	},
	render: (args) => (
		<IconButton {...args}>
			<Heart size={32} />
		</IconButton>
	)
};

export const Tertiary: Story = {
	name: "Tertiary Button",
	args: {
		onClick: (event: any) => alert("Tertiary Button Clicked"),
		variant: "tertiary",
		size: "medium",
		buttonType: "button"
	},
	render: (args) => (
		<IconButton {...args}>
			<Heart size={32} />
		</IconButton>
	)
};

export const Disabled: Story = {
	name: "Disabled Button",
	args: {
		onClick: (event: any) => alert("Disabled Button Clicked"),
		variant: "primary",
		size: "medium",
		buttonType: "button",
		disabled: true
	},
	render: (args) => (
		<IconButton {...args}>
			<Heart size={32} />
		</IconButton>
	)
};

export const TextButton: Story = {
	name: "Text Button",
	args: {
		onClick: (event: any) => alert("Text Button Clicked"),
		variant: "primary",
		size: "medium",
		buttonType: "text"
	},
	render: (args) => (
		<IconButton {...args}>
			<Heart size={32} />
		</IconButton>
	)
};
