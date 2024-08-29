import React from "react";
import { Circle } from "@phosphor-icons/react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, IButtonProps } from "../../main"; // Adjust the import path as needed

export default {
	title: "payzli-ui/Components/buttons/Button",
	component: Button,
	tags: ["autodocs", "test"],
	parameters: {
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
		label: {
			control: { type: "text" },
			table: { summary: "string" }
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
			options: ["button", "text", "link", "dropdown"],
			description: "Specifies the button's type."
		},
		size: {
			control: { type: "inline-radio" },
			options: ["small", "medium", "large"],
			description: "Defines the size of the button."
		},
		id: {
			control: { type: "text" }
		},
		disabled: {
			control: { type: "boolean" },
			description: "Disables the button when true.",
			table: { summary: "boolean", defaultValue: { summary: "false" } }
		},
		iconComp: {
			control: { type: "object" },
			description: "Use this if you have common icon component to be displayed on the button.",
			table: { summary: "React.ReactNode" }
		},
		leftIcon: {
			control: { type: "object" },
			description: "Use this if you have differnt icon for left.",
			table: { summary: "React.ReactNode" }
		},
		rightIcon: {
			control: { type: "object" },
			description: "Use this if you have differnt icon for right.",
			table: { summary: "React.ReactNode" }
		},
		iconPosition: {
			control: { type: "inline-radio" },
			options: ["left", "right", "both"],
			description: "Position of the icon within the button - use this when you have common iconComp.",
			table: { summary: `"left" | "right" | "both"` }
		},

		children: {
			control: { type: "object" },
			description: "Content to render inside the button.",
			table: { summary: "React.ReactNode" }
		},
		ref: {
			control: { type: "object" },
			description: "Ref for the button component.",
			table: { summary: "React.Ref<any>" }
		},
		dropdownIcon: { control: false, table: { category: "Hidden" } },
		dropdownClass: { control: false, table: { category: "Hidden" } },
		dropdownStyles: { control: false, table: { category: "Hidden" } }
	}
} as Meta<IButtonProps>;
type Story = StoryObj<IButtonProps>;

export const Primary: Story = {
	// 👇 Rename this story
	name: "Primary Button",
	args: {
		onClick: (event: any) => alert("Primary Button Clicked"),
		label: "Click Me",
		variant: "primary",
		size: "medium",
		buttonType: "button"
	}
};
export const Secondary: Story = {
	// 👇 Rename this story
	name: "Secondary Button",
	args: {
		onClick: (event: any) => alert("Secondary Button Clicked"),
		label: "Click Me",
		variant: "secondary",
		size: "medium",
		buttonType: "button"
	}
};

export const Tertiary: Story = {
	// 👇 Rename this story
	name: "Tertiary Button",
	args: {
		onClick: (event: any) => alert("Tertiary Button Clicked"),
		label: "Click Me",
		variant: "tertiary",
		size: "medium",
		buttonType: "button"
	}
};

export const Disabled: Story = {
	// 👇 Rename this story
	name: "Disabled Button",
	args: {
		onClick: (event: any) => alert("Disabled Button Clicked"),
		label: "Click Me",
		variant: "primary",
		size: "medium",
		buttonType: "button",
		disabled: true
	}
};

export const WithLeftIcon: Story = {
	// 👇 Rename this story
	name: "Button with Left Icon",
	args: {
		onClick: (event: any) => alert("Button with Left Icon Clicked"),
		label: "Click Me",
		variant: "primary",
		size: "medium",
		buttonType: "button",
		leftIcon: <Circle />,
		iconPosition: "left"
	}
};

export const WithRightIcon: Story = {
	// 👇 Rename this story
	name: "Button with Right Icon",
	args: {
		onClick: (event: any) => alert("Button with Right Icon Clicked"),
		label: "Click Me",
		variant: "primary",
		size: "medium",
		buttonType: "button",
		rightIcon: <Circle />,
		iconPosition: "right"
	}
};

export const WithBothIcons: Story = {
	// 👇 Rename this story
	name: "Button with Both Icons",
	args: {
		onClick: (event: any) => alert("Button with Both Icons Clicked"),
		label: "Click Me",
		variant: "primary",
		size: "medium",
		buttonType: "button",
		iconComp: <Circle />,
		iconPosition: "both"
	}
};

export const LinkButton: Story = {
	// 👇 Rename this story
	name: "Link Button",
	args: {
		onClick: (event: any) => alert("Link Button Clicked"),
		label: "Click Me",
		variant: "primary",
		size: "medium",
		buttonType: "link"
	}
};
