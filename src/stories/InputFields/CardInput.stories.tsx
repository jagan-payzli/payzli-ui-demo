import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { CardInput, ICardInputProps } from "../../main"; // Adjust the import path as needed
import CardIcon from "../../assets/icons/card.png";
export default {
	title: "payzli-ui/Components/InputFields/CardInput",
	component: CardInput,
	name: "InputField",
	tags: ["autodocs", "test"],
	parameters: {
		layout: "centered"
	},
	argTypes: {
		cardIcon: {
			control: { type: "object" },
			defaultValue: {
				summary: "CreditCard"
			},
			description: "React component or node to display as the card icon."
		},
		id: {
			control: { type: "text" }
		},
		value: {
			control: { type: "number" }
		},
		onChange: {
			action: "onChange",
			table: {
				type: { summary: "(e: React.ChangeEvent<HTMLInputElement>) => void" }
			}
		},
		className: {
			control: { type: "text" },
			description: "CSS class for the input field."
		},
		required: {
			control: { type: "boolean" },
			description: "Indicates if the input field is required."
		},
		formSubmitted: {
			control: { type: "boolean" },
			description: "Indicates if the form has been submitted."
		},
		name: {
			control: { type: "text" },
			description: "Name attribute of the input field."
		},
		label: {
			control: { type: "text" },
			description: "Label for the input field."
		},
		errorMessage: {
			control: { type: "text" },
			description: "Error message displayed for the input field."
		},
		formClass: {
			control: { type: "text" },
			description: "CSS class for the form wrapping the input field."
		},
		disableCopyPaste: {
			control: { type: "boolean" },
			description: "Disables copy-paste functionality."
		},
		onFocus: {
			action: "onFocus",
			description: "Callback function called when the input field is focused."
		},
		onBlur: {
			action: "onBlur",
			description: "Callback function called when the input field loses focus."
		},
		disabled: {
			control: { type: "boolean" },
			description: "Disables the input field."
		},
		placeholder: {
			control: { type: "text" },
			description: "Placeholder text for the input field."
		},
		isError: {
			control: false,
			description: "Callback function to determine if there's an error."
		},
		onCopy: {
			action: "onCopy",
			description: "Callback function called when copy action is triggered."
		},
		onCut: {
			action: "onCut",
			description: "Callback function called when cut action is triggered."
		},
		onContextMenu: {
			action: "onContextMenu",
			description: "Callback function called when the context menu is triggered."
		},
		skipValidation: {
			control: { type: "boolean" },
			description: "Skips input validation."
		},

		UiLanguage: {
			control: { type: "text" },
			description: "UI language for the input field."
		},
		tooltip: {
			control: { type: "text" },
			description: "Tooltip text for the input field."
		},
		hintText: {
			control: { type: "text" },
			description: "Hint text displayed below the input field."
		},
		mask: {
			control: { type: "text" },
			description: "Mask pattern for the input field."
		},
		format: {
			control: { type: "text" },
			description: "Format pattern for the input field."
		},
		transformPhrase: {
			description: "transformPhrase method to transform few row texts with the help of UI language",
			table: {
				type: { summary: "(phrase: string, UiLanguage: string, {}: options) => string" }
			}
		}
	}
} as Meta;

const Template: StoryFn<ICardInputProps> = (args) => {
	const [value, setValue] = useState<string>("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return <CardInput {...args} value={value} onChange={handleChange} />;
};

export const SimpleCard = Template.bind({});
SimpleCard.args = {
	id: "cardInput",
	name: "cardInput",
	label: "Card Input",
	className: "",
	required: false,
	formSubmitted: true,
	format: "#### #### #### ####",
	placeholder: "Enter card number"
};

export const CardWithoutFormat = Template.bind({});
CardWithoutFormat.args = {
	id: "cardInput",
	name: "cardInput",
	label: "Card Input",
	className: "",
	required: false,
	formSubmitted: true,
	placeholder: "Enter card number"
};

export const CardWithCustomIcon = Template.bind({});
CardWithCustomIcon.args = {
	id: "cardInput",
	name: "cardInput",
	label: "Card Input",
	className: "",
	required: false,
	formSubmitted: true,
	format: "#### #### #### ####",
	cardIcon: <img src={CardIcon} width={"100%"} height={"auto"} alt="Mastercard" />,
	placeholder: "Enter card number"
};

export const DisabledCard = Template.bind({});
DisabledCard.args = {
	id: "cardInput",
	name: "cardInput",
	label: "Card Input",
	className: "",
	required: false,
	formSubmitted: true,
	disabled: true,
	placeholder: "Enter card number"
};

export const ErrorCard = Template.bind({});
ErrorCard.args = {
	id: "cardInput",
	name: "cardInput",
	label: "Card Input",
	className: "",
	required: false,
	formSubmitted: true,
	errorMessage: "This is an error message",
	placeholder: "Enter card number"
};

export const CopyPasteDisabledCard = Template.bind({});
CopyPasteDisabledCard.args = {
	id: "cardInput",
	name: "cardInput",
	label: "Card Input",
	className: "",
	required: false,
	formSubmitted: true,
	disableCopyPaste: true,
	placeholder: "Enter card number"
};

export const TooltipCard = Template.bind({});
TooltipCard.args = {
	id: "cardInput",
	name: "cardInput",
	label: "Card Input",
	className: "",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter card number"
};
