import { CaretDown } from "@phosphor-icons/react";
import { Meta, StoryFn } from "@storybook/react/*";
import { Button, Popover, Typography } from "../components";
import { IPopoverProps } from "../models";

export default {
	title: "payzli-ui/Components/Popover",
	component: Popover,
	tags: ["autodocs", "test"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: "Use this component for showing a popup on a button or an icon."
			}
		}
	},
	argTypes: {
		parentStyle: {
			control: { type: "object" },
			description: "Styles for the popover's parent element.",
			table: { summary: "object" }
		},
		parentClass: {
			control: { type: "text" },
			description: "CSS class for the popover's parent element.",
			table: { summary: "string" }
		},
		children: {
			control: { type: "object" },
			description: "Content to render inside the popover.",
			table: { summary: "React.ReactNode" }
		},
		hoverTrigger: {
			control: { type: "boolean" },
			description: "Whether the popover should open on hover.",
			table: { summary: "boolean", defaultValue: { summary: "false" } }
		},
		title: {
			control: { type: "text" },
			description: "Title to display inside the popover.",
			table: { summary: "string" }
		},
		titleClass: {
			control: { type: "text" },
			description: "CSS class for the title inside the popover.",
			table: { summary: "string" }
		},
		target: {
			control: { type: "object" },
			description: "The React node that triggers the popup.",
			table: {
				defaultValue: { summary: "three dots" },
				type: { summary: "React.ReactNode" }
			}
		},
		iconContainerClass: {
			control: { type: "text" },
			description: "CSS class for the icon container.",
			table: { summary: "string" }
		},
		dropdownClass: {
			control: { type: "text" },
			description: "CSS class for the dropdown content inside the popover.",
			table: { summary: "string" }
		},
		position: {
			control: { type: "inline-radio" },
			options: ["left", "right", "bottom", "bottom-left", "bottom-right", "top"],
			description: "Position of the popover relative to the target.",
			table: { summary: `"left" | "right" | "bottom" | "bottom-left" | "bottom-right" | "top"` }
		},
		mouseoverTitle: {
			control: { type: "text" },
			description: "Title to show on mouse over the popover.",
			table: { summary: "string" }
		},
		disableHoverOut: {
			control: { type: "boolean" },
			description: "If true, the popover will not close on mouse out.",
			table: { summary: "boolean", defaultValue: { summary: "false" } }
		},
		handlePopupVisible: {
			action: "handlePopupVisible",
			description: "Callback function for handling popover visibility state.",
			table: {
				type: { summary: "function" },
				defaultValue: { summary: "(visible: boolean) => void" }
			}
		},
		ref: {
			control: { type: "object" },
			description: "Ref for the popover component.",
			table: { summary: "React.Ref<any>" }
		}
	}
} as Meta;

const options = [
	{ label: "USD", value: "USD", code: "USD", symbol: "$" },
	{ label: "INR", value: "INR", code: "INR", symbol: "₹" }
];
const Template: StoryFn<IPopoverProps> = (args: IPopoverProps) => {
	return (
		<Popover {...args}>
			<Typography type="text" size="lg">
				Popup Title
			</Typography>
			<div>
				<Typography color="muted">Popover content</Typography>
			</div>
		</Popover>
	);
};

export const DefaultPopover = Template.bind({});
DefaultPopover.args = {
	position: "bottom-right",
	parentClass: "p-2",
	target: <Button variant="secondary" iconPosition="right" rightIcon={<CaretDown weight="bold" />} onClick={() => {}} label={"Click Me"} />
};

export const PopupOnHover = Template.bind({});
PopupOnHover.args = {
	position: "bottom-right",
	parentClass: "p-2",
	target: <Button variant="secondary" iconPosition="right" rightIcon={<CaretDown weight="bold" />} onClick={() => {}} label={"Hover Me"} />,
	hoverTrigger: true
};

export const PopupOnHoverNoClose = Template.bind({});
PopupOnHoverNoClose.args = {
	position: "bottom-right",
	parentClass: "p-2",
	target: <Button variant="secondary" iconPosition="right" rightIcon={<CaretDown weight="bold" />} onClick={() => {}} label={"Hover Me"} />,
	hoverTrigger: true,
	disableHoverOut: true
};

export const PopupOnTitle = Template.bind({});
PopupOnTitle.args = {
	position: "bottom-right",
	parentClass: "p-2",
	title: "Hover Me",
	hoverTrigger: true
};
