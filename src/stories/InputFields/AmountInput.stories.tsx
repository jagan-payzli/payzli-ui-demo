// src/components/Button.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { AmountInput, IAmountInputProps } from "../../main"; // Adjust the import path as needed
import { useState } from "react";
const currencyOptions = [
	{ label: "USD", value: "USD", symbol: "$" },
	{ label: "INR", value: "INR", symbol: "₹" },
	{ label: "EUR", value: "EUR", symbol: "€" },
	{ label: "GBP", value: "GBP", symbol: "£" },
	{ label: "JPY", value: "JPY", symbol: "¥" },
	{ label: "AUD", value: "AUD", symbol: "$" },
	{ label: "CAD", value: "CAD", symbol: "$" },
	{ label: "CHF", value: "CHF", symbol: "CHF" },
	{ label: "CNY", value: "CNY", symbol: "¥" }
];
export default {
	title: "payzli-ui/Components/InputFields/AmountInput",
	component: AmountInput,
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
			control: { type: "text" }
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
			control: { type: "text" }
		},
		placeholder: {
			control: { type: "text" }
		},
		required: {
			control: { type: "boolean" }
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
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" }
			}
		},
		disabled: {
			control: { type: "boolean" },
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" }
			}
		},
		decimalPlace: {
			control: { type: "number" },
			description: "Number of decimal places allowed."
		},
		min: {
			control: { type: "number" },
			description: "Minimum value allowed."
		},
		max: {
			control: { type: "number" },
			description: "Maximum value allowed."
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
			description: "Sets the input field to read-only mode."
		},
		autoFocus: {
			control: { type: "boolean" },
			description: "Automatically focuses the input field on mount."
		},
		tooltip: {
			control: { type: "text" },
			description: "Tooltip text for the input field."
		},
		hintText: {
			control: { type: "text" },
			description: "Hint text displayed below the input field."
		},
		errorMessage: {
			control: { type: "text" },
			description: "Error message displayed for the input field."
		},
		UiLanguage: {
			control: { type: "text" },
			description: "UI language for the input field."
		},
		thousandSeparator: {
			control: { type: "boolean" },
			description: "Enables thousand separators for numeric input."
		},
		thousandsGroupStyle: {
			control: { type: "inline-radio" },
			options: ["thousand", "lakh", "wan"],
			description: "Style of thousands grouping."
		},
		handleSelectCurrency: {
			action: "handleSelectCurrency",
			description: "Callback function for selecting a currency."
		},
		currencyOptions: {
			description: "List of currency options. ISelectInput[]"
		},
		selectedCurrency: {
			control: { type: "object" },
			description: "Currently selected currency."
		},
		popupParentClass: {
			control: { type: "text" },
			description: "CSS class for the popup parent element."
		},
		isLoading: {
			control: { type: "boolean" },
			description: "Indicates if data is loading in popup."
		},
		disableCurrency: {
			control: { type: "boolean" },
			description: "Disables currency selection."
		},
		transformPhrase: {
			description: "transformPhrase method to transform few row texts with the help of UI language",
			table: {
				type: { summary: "(phrase: string, UiLanguage: string, {}: options) => string" }
			}
		}
	}
} as Meta<IAmountInputProps>;
const Template: StoryFn<IAmountInputProps> = (args) => {
	const [value, setValue] = useState("1000000");
	const [selectedCurrency, setSelectedCurrency] = useState(args.selectedCurrency);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<AmountInput
			{...args}
			value={value}
			onChange={handleChange}
			selectedCurrency={selectedCurrency}
			handleSelectCurrency={setSelectedCurrency}
			currencyOptions={currencyOptions}
		/>
	);
};

export const SimpleAmountInput = Template.bind({});
SimpleAmountInput.args = {
	id: "amount",
	label: "Amount",
	placeholder: "write...",
	sectionType: "right",
	name: "amount",
	className: "m-0",
	formClass: "",
	required: false,
	formSubmitted: true,
	decimalPlace: 3,
	tooltip: "Note: pass sectionRightIcon & sectionType='right'"
};
export const DisabledAmountInput = Template.bind({});
DisabledAmountInput.args = {
	id: "amount",
	label: "Amount",
	placeholder: "write...",
	sectionType: "right",
	name: "amount",
	className: "m-0",
	formClass: "",
	required: false,
	formSubmitted: true,
	decimalPlace: 3,
	disabled: true,
	disableCurrency: true,
	tooltip: "Note: pass sectionRightIcon & sectionType='right'"
};

export const ReadOnlyAmountInput = Template.bind({});
ReadOnlyAmountInput.args = {
	id: "amount",
	label: "Amount",
	placeholder: "write...",
	sectionType: "right",
	name: "amount",
	className: "m-0",
	formClass: "",
	required: false,
	formSubmitted: true,
	decimalPlace: 2,
	readOnly: true,
	tooltip: "Note: pass sectionRightIcon & sectionType='right'"
};

export const WithNegativeValue = Template.bind({});
WithNegativeValue.args = {
	id: "amount",
	label: "Amount",
	placeholder: "write...",
	sectionType: "right",
	name: "amount",
	className: "m-0",
	formClass: "",
	required: false,
	formSubmitted: true,
	decimalPlace: 2,
	allowNegative: true,
	tooltip: "Note: pass sectionRightIcon & sectionType='right'"
};

export const WithDefaultCurrency = Template.bind({});
WithDefaultCurrency.args = {
	id: "amount",
	label: "Amount",
	placeholder: "write...",
	sectionType: "right",
	name: "amount",
	className: "m-0",
	formClass: "",
	required: false,
	formSubmitted: true,
	decimalPlace: 2,
	selectedCurrency: currencyOptions[1],
	tooltip: "Note: pass sectionRightIcon & sectionType='right'"
};
