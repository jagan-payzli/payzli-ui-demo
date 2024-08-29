// src/components/Button.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { InputField, ITextField } from "../../main"; // Adjust the import path as needed
import { useState } from "react";
import { EnvelopeSimple } from "@phosphor-icons/react";
export default {
	title: "payzli-ui/Components/InputFields/TextInput",
	component: InputField,
	name: "InputField",
	tags: ["autodocs", "test"],
	parameters: {
		layout: "centered"
	},
	argTypes: {
		type: {
			control: { type: "inline-radio" },
			options: ["text", "email"],
			defaultValue: { summary: "text" },
			description: "Specifies the type of input field."
		},
		id: {
			control: { type: "text" },
			description: "Unique identifier for the input field."
		},
		value: {
			control: { type: "text" }
		},
		placeholder: {
			control: { type: "text" }
		},
		onChange: {
			action: "onChange",
			description: "Callback function triggered when the input value changes.",
			table: {
				type: { summary: "(e: React.ChangeEvent<HTMLInputElement>) => void" }
			}
		},
		className: {
			control: { type: "text" }
		},
		required: {
			control: { type: "boolean" },
			defaultValue: { summary: false }
		},

		formSubmitted: {
			control: { type: "boolean" },
			defaultValue: { summary: false },
			description: "Indicates if the form containing the input field has been submitted."
		},
		name: {
			control: { type: "text" },
			description: "Name attribute for the input field. this is used as identifier for the input field."
		},
		label: {
			control: { type: "text" },
			description: "Label text for the input field."
		},
		tooltip: {
			control: { type: "text" }
		},
		errorMessage: {
			control: { type: "text" },
			description: "Custom Error message for input field from parent."
		},
		formClass: {
			control: { type: "text" },
			description: "CSS class for the form element containing the input."
		},
		disabled: {
			control: { type: "boolean" },
			defaultValue: { summary: false }
		},
		leftIcon: {
			control: { type: "select" },
			options: ["search", "email", "React.ReactNode"],
			description: "Icon to display on the left side of the input field."
		},
		onBlur: {
			action: "onBlur",
			description: "Callback function triggered when the input loses focus.",
			table: {
				type: { summary: "(e: React.FocusEvent<HTMLInputElement>) => void" }
			}
		},

		disableAutoFill: {
			control: { type: "boolean" },
			defaultValue: { summary: false },
			description: "Disables the browser's autofill feature for the input field."
		},
		fieldType: {
			control: { type: "inline-radio" },
			options: ["url"],
			description: "Specifies the type of input field, e.g., 'url'."
		},
		autoFocus: {
			control: { type: "boolean" },
			defaultValue: { summary: false },
			description: "Automatically focuses the input field when the component mounts."
		},

		readOnly: {
			control: { type: "boolean" },
			defaultValue: { summary: false },
			description: "Indicates whether the input field is read-only."
		},
		disableValidation: {
			control: { type: "boolean" },
			defaultValue: { summary: false },
			description: "Disables validation for the input field."
		},

		imputMode: {
			control: { type: "select" },
			options: ["text", "search", "email", "tel", "url", "none", "numeric", "decimal"],
			defaultValue: { summary: "text" },
			description: "Hint for the type of input mode to use on virtual keyboards."
		},

		pattern: {
			control: { type: "text" },
			description: "Regular expression pattern that the input field's value must match."
		},
		minLength: {
			control: { type: "number" },
			description: "Minimum length of the input field's value."
		},
		maxLength: {
			control: { type: "number" },
			description: "Maximum length of the input field's value."
		},
		showMaxLength: {
			control: { type: "boolean" },
			description: "Shows the maximum length as a counter on the input field."
		},

		hintText: {
			control: { type: "text" },
			description: "Additional hint text displayed below the input field."
		},
		UiLanguage: {
			control: { type: "text" },
			description: "Specifies the UI language for the input field. used in transformPhrase method"
		},

		sectionType: {
			control: { type: "inline-radio" },
			options: ["left", "right", "both"],
			description: "Determines the section type for the input field."
		},
		sectionLeftIcon: {
			control: { type: "object" },
			description: "Icon component to display on the left section of the input field."
		},
		sectionRightIcon: {
			control: { type: "object" },
			description: "Icon component to display on the right section of the input field."
		},
		transformPhrase: {
			description: "transformPhrase method to transform few row texts with the help of UI language",
			table: {
				type: { summary: "(phrase: string, UiLanguage: string, {}: options) => string" }
			}
		}
	}
} as Meta<ITextField>;
const Template: StoryFn<ITextField> = (args) => {
	const [value, setValue] = useState(args.value);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return <InputField {...args} value={value} onChange={handleChange} />;
};
export const TextInput = Template.bind({});
TextInput.args = {
	type: "text",
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here"
};

export const EmailInput = Template.bind({});
EmailInput.args = {
	type: "email",
	id: "email-input",
	name: "email-input",
	label: "Email Input",
	required: true,
	formSubmitted: false,
	tooltip: "This is a tooltip",
	leftIcon: <EnvelopeSimple className="icon-color" />,
	placeholder: "Ex: example@gmail.com"
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
	type: "text",
	id: "disabled-input",
	name: "disabled-input",
	label: "Disabled Input",
	required: false,
	formSubmitted: false,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	disabled: true
};

export const ReadOnlyInput = Template.bind({});
ReadOnlyInput.args = {
	type: "text",
	id: "readonly-input",
	name: "readonly-input",
	label: "Read-only Input",
	required: false,
	formSubmitted: false,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	readOnly: true
};

export const InputWithSection = Template.bind({});
InputWithSection.args = {
	type: "text",
	id: "input-with-section",
	name: "input-with-section",
	label: "Input with Section",
	required: false,
	formSubmitted: false,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	sectionType: "left",
	fieldType: "url",
	sectionLeftIcon: <span className="px-2">https://</span>
};
export const InputWithSectionCopy = Template.bind({});
InputWithSectionCopy.args = {
	type: "text",
	id: "input-with-section",
	name: "input-with-section",
	label: "Input with Section",
	required: false,
	formSubmitted: false,
	placeholder: "Enter text here",
	sectionType: "both",
	fieldType: "url",
	sectionLeftIcon: <span className="px-2">https://</span>,
	sectionRightIcon: <span className="px-2">Copy</span>
};

export const InputWithMaxLength = Template.bind({});
InputWithMaxLength.args = {
	type: "text",
	id: "input-with-maxlength",
	name: "input-with-maxlength",
	label: "Input with Max Length",
	required: false,
	formSubmitted: false,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	maxLength: 10,
	showMaxLength: true
};

export const InputWithHintText = Template.bind({});
InputWithHintText.args = {
	type: "text",
	id: "input-with-hinttext",
	name: "input-with-hinttext",
	label: "Input with Hint Text",
	required: false,
	formSubmitted: false,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	hintText: "This is a hint text"
};

export const InputWithErrorMessage = Template.bind({});
InputWithErrorMessage.args = {
	type: "text",
	id: "input-with-errormessage",
	name: "input-with-errormessage",
	label: "Input with Error Message",
	required: false,
	formSubmitted: false,
	tooltip: "This is a tooltip",
	placeholder: "Enter text here",
	errorMessage: "This is an error message"
};
