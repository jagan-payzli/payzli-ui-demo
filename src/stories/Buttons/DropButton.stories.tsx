import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DropButton, IDropButtonProps } from "../../main"; // Adjust the import path as needed
import { Plus } from "@phosphor-icons/react";

export default {
	title: "payzli-ui/Components/buttons/DropButton",
	component: DropButton,
	tags: ["autodocs", "test"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A button with a dropdown popup. this will be used for two actions, one for the button click and another for the dropdown click"
			}
		}
	},
	argTypes: {
		onClick: {
			action: "onClick",
			description: "Callback function triggered when the button is clicked.",
			table: {
				type: { summary: "function" },
				defaultValue: { summary: "(event: React.MouseEvent<HTMLButtonElement>) => void" }
			}
		},
		label: {
			control: { type: "text" },
			description: "Text displayed inside the button.",
			table: { summary: "string" }
		},
		variant: {
			control: { type: "radio" },
			options: ["primary", "secondary", "tertiary", "none"],
			description: "The button's visual style variant.",
			table: { summary: `"primary" | "secondary" | "tertiary" | "none"` }
		},
		className: {
			control: { type: "text" },
			description: "Custom CSS class for the button.",
			table: { summary: "string" }
		},
		id: {
			control: { type: "text" },
			description: "HTML ID attribute for the button.",
			table: { summary: "string" }
		},
		disabled: {
			control: { type: "boolean" },
			description: "Disables the button when true.",
			table: { summary: "boolean", defaultValue: { summary: "false" } }
		},
		disableDropBtn: {
			control: { type: "boolean" },
			description: "Disables the button when true.",
			table: { summary: "boolean", defaultValue: { summary: "false" }, category: "Dropdown Button" }
		},
		leftIcon: {
			control: { type: "object" },
			description: "Icon component for the left side of the button.",
			table: { summary: "React.ReactNode" }
		},

		children: {
			control: { type: "object" },
			description: "Content to render inside the button.",
			table: { summary: "React.ReactNode" }
		},

		onDropdownClick: {
			action: "onDropdownClick",
			description: "Callback function triggered when the dropdown icon is clicked.",
			table: {
				type: { summary: "function" },
				defaultValue: { summary: "(event: React.MouseEvent<HTMLButtonElement>) => void" }
			}
		},
		dropdownIcon: {
			control: { type: "object" },
			description: "Icon component for the dropdown.",
			table: { summary: "React.ReactNode", category: "Dropdown Button" }
		},
		dropdownClass: {
			control: { type: "text" },
			description: "Custom CSS class for the dropdown button.",
			table: { summary: "string", category: "Dropdown Button" }
		},
		dropdownStyles: {
			control: { type: "object" },
			description: "Inline styles for the dropdown button.",
			table: { summary: "React.CSSProperties", category: "Dropdown Button" }
		},
		parentStyle: {
			control: { type: "object" },
			description: "Style for the popup container.",
			table: { summary: "object", category: "Dropdown Button" }
		},
		parentClass: {
			control: { type: "text" },
			description: "Class name for the popup container.",
			table: { summary: "string", category: "Dropdown Button" }
		},
		hoverTrigger: {
			control: { type: "boolean" },
			description: "If true, the popup will be shown on hover.",
			table: { summary: "boolean", category: "Dropdown Button" }
		},
		iconContainerClass: {
			control: { type: "text" },
			description: "Class name for the dropdown icon container div.",
			table: { summary: "string", category: "Dropdown Button" }
		},
		mouseoverTitle: {
			control: { type: "text" },
			description: "Title for the dropdown button component.",
			table: { summary: "string", category: "Dropdown Button" }
		},
		disableHoverOut: {
			control: { type: "boolean" },
			description: "If true, prevents the popup from closing on mouse out.",
			table: { summary: "boolean", category: "Dropdown Button" }
		},
		position: {
			control: { type: "select" },
			options: ["left", "right", "bottom", "bottom-left", "bottom-right", "top"],
			description: "Position of the popup relative to the trigger element.",
			table: { summary: `"left" | "right" | "bottom" | "bottom-left" | "bottom-right" | "top"`, category: "Dropdown Button" }
		},
		ref: {
			control: { type: "object" },
			description: "Ref for the dropdown button component.",
			table: { summary: "React.Ref<any>", category: "Dropdown Button" }
		},
		buttonType: { control: false },
		iconPosition: { control: false }
	}
} as Meta;

const Template: StoryFn<IDropButtonProps> = (args) => {
	const defaultOnClick = (event: any) => alert("DropButton Clicked");
	const handleDropdownClick = () => alert("Dropdown clicked");
	return (
		<DropButton {...args} onClick={defaultOnClick} onDropdownClick={handleDropdownClick}>
			<ul>
				<li>Hello world</li>
				<li>Hello world</li>
				<li>Hello world</li>
				<li>Hello world</li>
				<li>Hello world</li>
				<li>Hello world</li>
			</ul>
		</DropButton>
	);
};
export const Default = Template.bind({});
Default.args = {
	label: "Click Me",
	leftIcon: <Plus />,
	variant: "primary",
	position: "bottom"
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
	label: "Click Me",
	leftIcon: <Plus />,
	variant: "primary",
	position: "bottom",
	disabled: true
};

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
	label: "Click Me",
	leftIcon: <Plus />,
	variant: "primary",
	position: "bottom",
	disableDropBtn: true
};

export const DisabledBoth = Template.bind({});
DisabledBoth.args = {
	label: "Click Me",
	leftIcon: <Plus />,
	variant: "primary",
	position: "bottom",
	disabled: true,
	disableDropBtn: true
};

export const HoverTrigger = Template.bind({});
HoverTrigger.args = {
	label: "Click Me",
	leftIcon: <Plus />,
	variant: "primary",
	position: "bottom",
	hoverTrigger: true
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
	label: "Click Me",
	variant: "primary",
	position: "bottom"
};
