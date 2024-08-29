// src/components/Button.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { INumberInput, NumberInput } from "../../main"; // Adjust the import path as needed
import { useState } from "react";
export default {
	title: "payzli-ui/Components/InputFields/NumberInput",
	component: NumberInput,
	name: "InputField",
	tags: ["autodocs", "test"],
	parameters: {
		layout: "centered"
	},
	argTypes: {
		id: {
			control: { type: "text" }
		},
		value: {
			control: { type: "number" }
		},
		onChange: {
			action: "onChange",
			description: "Callback function triggered when the input value changes.",
			table: {
				type: { summary: "(e: React.ChangeEvent<HTMLInputElement>) => void" }
			}
		},
		name: {
			control: { type: "text" },
			description: "Name attribute of the input field."
		},
		label: {
			control: { type: "text" },
			description: "Label for the input field."
		},
		placeholder: {
			control: { type: "text" }
		},
		required: {
			control: { type: "boolean" },
			defaultValue: { summary: true }
		},
		className: {
			control: { type: "text" }
		},
		formClass: {
			control: { type: "text" },
			description: "CSS class for the form wrapping the input field."
		},
		formSubmitted: {
			control: { type: "boolean" },
			defaultValue: { summary: true },
			description: "Indicates if the form has been submitted."
		},
		disabled: {
			control: { type: "boolean" },
			defaultValue: { summary: true }
		},
		min: {
			control: { type: "number" },
			description: "Minimum value allowed."
		},
		max: {
			control: { type: "number" },
			description: "Maximum value allowed."
		},
		icon: {
			control: { type: "inline-radio" },
			options: ["currency", "percentage"],
			description: "Icon type for the input field."
		},
		leftIcon: {
			control: { type: "object" },
			description: "React component or node to display as left icon."
		},

		onFocus: {
			action: "onFocus",
			description: "Callback function called when the input field is focused."
		},
		onBlur: {
			action: "onBlur",
			description: "Callback function called when the input field loses focus."
		},
		isError: {
			control: false,
			description: "Callback function to determine if there's an error."
		},
		onContextMenu: {
			action: "onContextMenu",
			description: "Callback function called when the context menu is triggered."
		},
		allowNegative: {
			control: { type: "boolean" },
			description: "Allows negative values."
		},
		skipValidation: {
			control: { type: "boolean" },
			description: "Skips input validation."
		},
		disableWarning: {
			control: { type: "boolean" },
			description: "Disables warning messages."
		},
		readOnly: {
			control: { type: "boolean" },
			description: "Sets the input field to read-only mode but not disabled."
		},
		autoFocus: {
			control: { type: "boolean" }
		},
		minLength: {
			control: { type: "number" },
			description: "Minimum length for the input value."
		},
		maxLength: {
			control: { type: "number" },
			description: "Maximum length for the input value."
		},
		showMaxLength: {
			control: { type: "boolean" },
			description: "Shows the maximum length indicator."
		},
		tooltip: {
			control: { type: "text" }
		},
		hintText: {
			control: { type: "text" },
			description: "Hint text displayed below the input field."
		},
		errorMessage: {
			control: { type: "text" },
			description: "Error message displayed for the input field."
		},
		transformPhrase: {
			description: "transformPhrase method to transform few row texts with the help of UI language",
			table: {
				type: { summary: "(phrase: string, UiLanguage: string, {}: options) => string" }
			}
		},
		UiLanguage: {
			control: { type: "text" },
			description: "UI language for the input field."
		},
		ref: {
			control: { type: "object" },
			description: "Reference to the input field."
		},
		sectionType: {
			control: { type: "inline-radio" },
			options: ["left", "right", "both"],
			description: "Section type for the input field. and pass the sectionLeftIcon and sectionRightIcon"
		},
		sectionLeftIcon: {
			control: { type: "object" },
			description: "React component or node to display as left section icon."
		},
		sectionRightIcon: {
			control: { type: "object" },
			description: "React component or node to display as right section icon."
		},
		leftIconClass: {
			control: { type: "text" }
		},
		inputType: {
			control: { type: "inline-radio" },
			options: ["amount", "number"],
			defaultValue: { summary: "number" },
			description: "Input type for the field."
		},
		thousandSeparator: {
			control: { type: "boolean" },
			defaultValue: { summary: true },
			description: "Enables thousand separators for numeric input."
		},
		thousandsGroupStyle: {
			control: { type: "inline-radio" },
			options: ["thousand", "lakh", "wan"],
			defaultValue: { summary: "thousand" },
			description: "Style of thousands grouping."
		}
	}
} as Meta<INumberInput>;
const Template: StoryFn<INumberInput> = (args) => {
	const [value, setValue] = useState(args.value);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return <NumberInput {...args} value={value} onChange={handleChange} />;
};
export const NumberInputOptional = Template.bind({});
NumberInputOptional.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here"
};

export const NumberInputRequired = Template.bind({});
NumberInputRequired.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: true,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here"
};

export const NumberInputDisabled = Template.bind({});
NumberInputDisabled.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	disabled: true
};

export const NumberInputReadOnly = Template.bind({});
NumberInputReadOnly.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	readOnly: true
};

export const NumberInputCurrency = Template.bind({});
NumberInputCurrency.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	icon: "currency"
};

export const NumberInputPercentage = Template.bind({});
NumberInputPercentage.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	icon: "percentage"
};

export const NumberInputWithSection = Template.bind({});
NumberInputWithSection.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	sectionType: "both",
	sectionLeftIcon: <span className="px-2">+</span>,
	sectionRightIcon: <span className="px-2">-</span>
};

export const NumberInputWithMaxLength = Template.bind({});
NumberInputWithMaxLength.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	maxLength: 10
};

export const NumberInputWithMinAndMax = Template.bind({});
NumberInputWithMinAndMax.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: true,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	min: 5,
	max: 100
};

export const NumberInputWithHintText = Template.bind({});
NumberInputWithHintText.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	hintText: "This is a hint text"
};

export const NumberInputWithErrorMessage = Template.bind({});
NumberInputWithErrorMessage.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	errorMessage: "This is an error message"
};

export const NumberInputWithThousandSeparator = Template.bind({});
NumberInputWithThousandSeparator.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	thousandSeparator: true
};
