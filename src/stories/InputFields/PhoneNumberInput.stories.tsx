import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { IPhoneInput, ISelectInput, PhoneNumberInput } from "../../main"; // Adjust the import path as needed
export default {
	title: "payzli-ui/Components/InputFields/PhoneNumberInput",
	component: PhoneNumberInput,
	name: "InputField",
	tags: ["autodocs", "test"],
	parameters: {
		layout: "centered"
	},
	argTypes: {
		handleSelectCountryCode: {
			action: "handleSelectCountryCode",
			description: "Callback function to handle the selection of a country code.",
			table: {
				category: "Country Code",
				type: { summary: "(value: ISelectInput) => void" }
			}
		},
		countryCodeOptions: {
			control: { type: "object" },
			description: "Array of country code options for the input.",
			defaultValue: { label: "US", value: "US", code: "+1" },
			table: {
				category: "Country Code",
				type: { summary: "ISelectInput[]" }
			}
		},
		selectedCountryCode: {
			control: { type: "object" },
			description: "Currently selected country code.",
			table: {
				category: "Country Code",
				type: { summary: "ISelectInput" }
			}
		},
		popupParentClass: {
			control: { type: "text" },
			description: "CSS class for the popup parent container.",
			table: {
				category: "Country Code"
			}
		},
		isLoading: {
			control: { type: "boolean" },
			description: "Indicates if the component is in a loading state."
		},
		disableCurrency: {
			control: { type: "boolean" },
			description: "Disables currency-related features."
		},
		id: {
			control: { type: "text" },
			description: "Unique identifier for the input field."
		},
		value: {
			control: { type: "text" },
			description: "The current value of the input field."
		},
		onChange: {
			action: "onChange",
			description: "Callback function called when the value changes.",
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
		onFocus: {
			action: "onFocus",
			description: "Callback function called when the input field is focused.",
			table: {
				type: { summary: "(e: React.FocusEvent<HTMLInputElement>) => void" }
			}
		},
		onBlur: {
			action: "onBlur",
			description: "Callback function called when the input field loses focus.",
			table: {
				type: { summary: "(e: React.FocusEvent<HTMLInputElement>) => void" }
			}
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
			action: "isError",
			description: "Callback function to determine if there's an error.",
			table: {
				type: { summary: "(err: { [name: string]: string }) => void" }
			}
		},
		skipValidation: {
			control: { type: "boolean" },
			description: "Skips input validation."
		},
		transformPhrase: {
			action: "transformPhrase",
			description: "Function to transform phrases.",
			table: {
				type: { summary: "(phrase: string, UiLanguage: string, params: any) => string" }
			}
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
		".py_icon_color": {
			description: "Country code button caret icon class.",
			defaultValue: {
				summary: "#98a2b3"
			},
			table: { category: "Styling", type: "color" }
		},
		".py_currency_code": {
			description: "Country code typography class.",
			defaultValue: {
				summary: ""
			},
			table: { category: "Styling", type: "class" }
		},
		".py_currency_code_btn": {
			description: "Country code button class.",
			defaultValue: {
				summary: ""
			},
			table: { category: "Styling", type: "class" }
		}
	}
} as Meta;
const countryCodeOptions: ISelectInput[] = [
	{ value: "US", label: "US", code: "+1", format: "+1 (###) ###-####", country: "United States" },
	{ value: "IN", label: "IN", code: "+91", format: "+91 (###) ###-####", country: "India" },
	{ value: "UK", label: "UK", code: "+44", format: "+44 (###) ###-####", country: "United Kingdom" },
	{ value: "JP", label: "JP", code: "+81", format: "+81 (###) ###-####", country: "Japan" },
	{ value: "AU", label: "AU", code: "+61", format: "+61 (###) ###-####", country: "Australia" }
];
const Template: StoryFn<IPhoneInput> = (args) => {
	const [value, setValue] = useState<string>("");
	const [selectedCountry, setSelectedCountry] = useState<ISelectInput>(countryCodeOptions[0]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<PhoneNumberInput
			{...args}
			value={value}
			onChange={handleChange}
			selectedCountryCode={selectedCountry}
			placeholder={selectedCountry.format || "Enter phone number"}
			countryCodeOptions={countryCodeOptions}
			handleSelectCountryCode={setSelectedCountry}
		/>
	);
};

export const PhoneNumber = Template.bind({});
PhoneNumber.args = {
	id: "phoneNumber",
	name: "phoneNumber",
	label: "PhoneNumber Input",
	className: "",
	required: false,
	formSubmitted: true,
	tooltip: "Note: pass sectionLeftIcon & sectionType='left'"
};

export const PhoneNumberRequired = Template.bind({});
PhoneNumberRequired.args = {
	id: "phoneNumber",
	name: "phoneNumber",
	label: "PhoneNumber Input",
	className: "",
	required: true,
	formSubmitted: true,
	tooltip: "Note: pass sectionLeftIcon & sectionType='left'"
};
export const PhoneNumberDisabled = Template.bind({});
PhoneNumberDisabled.args = {
	id: "phoneNumber",
	name: "phoneNumber",
	label: "PhoneNumber Input",
	className: "",
	required: false,
	formSubmitted: true,
	disabled: true,
	disableCurrency: true,
	tooltip: "Note: pass sectionLeftIcon & sectionType='left'"
};

export const DisabledCurrency = Template.bind({});
DisabledCurrency.args = {
	id: "phoneNumber",
	name: "phoneNumber",
	label: "PhoneNumber Input",
	className: "",
	required: false,
	formSubmitted: true,
	disableCurrency: true,
	placeholder: "Enter phone number",
	tooltip: "Note: pass sectionLeftIcon & sectionType='left'"
};
