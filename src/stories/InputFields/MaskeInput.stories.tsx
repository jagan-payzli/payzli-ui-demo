// src/components/Button.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { IMaskInputProps, MaskInput } from "../../main"; // Adjust the import path as needed
export default {
	title: "payzli-ui/Components/InputFields/MaskInput",
	component: MaskInput,
	tags: ["autodocs", "test"],
	parameters: {
		layout: "centered"
	},
	argTypes: {
		id: {
			control: { type: "text" }
		},
		type: {
			control: { type: "select" },
			options: ["text", "number", "email", "password", "tel", "date"],
			description: "Specifies the input type.",
			table: {
				type: { summary: '"text" | "number" | "email" | "password" | "tel" | "date"' }
			}
		},
		mask: {
			control: { type: "text" },
			description: "Input mask pattern.",
			table: {
				defaultValue: { summary: "-" },
				type: { summary: "string" }
			}
		},
		format: {
			control: { type: "text" },
			description: "Format string for input value.",
			table: {
				defaultValue: { summary: "#### #### #### ####" },
				type: { summary: "string" }
			}
		},
		value: {
			control: { type: "text" }
		},
		onChange: {
			action: "onChange",
			table: {
				type: { summary: "(e: React.ChangeEvent<HTMLInputElement>) => void" }
			}
		},
		className: {
			control: { type: "text" }
		},
		required: {
			control: { type: "boolean" },
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" }
			}
		},
		formSubmitted: {
			control: { type: "boolean" },
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" }
			}
		},
		name: {
			control: { type: "text" },
			description: "Name attribute of the input.",
			table: {
				type: { summary: "string" }
			}
		},
		label: {
			control: { type: "text" },
			description: "Label for the input.",
			table: {
				type: { summary: "string" }
			}
		},
		errorMessage: {
			control: { type: "text" },
			description: "Error message displayed for the input.",
			table: {
				type: { summary: "string" }
			}
		},
		formClass: {
			control: { type: "text" },
			description: "CSS class for the form wrapping the input.",
			table: {
				type: { summary: "string" }
			}
		},
		prefix: {
			control: { type: "text" },
			description: "Prefix displayed before the input value. Ex: $ for currency.",
			table: {
				type: { summary: "string" }
			}
		},
		suffix: {
			control: { type: "text" },
			description: "Suffix displayed after the input value Ex: % for percentage.",
			table: {
				type: { summary: "string" }
			}
		},
		disableCopyPaste: {
			control: { type: "boolean" },
			description: "Disables copy-paste functionality.",
			table: {
				type: { summary: "boolean" }
			}
		},
		onFocus: {
			action: "onFocus",
			description: "Callback function called when the input gains focus.",
			table: {
				type: { summary: "(e: React.FocusEvent<HTMLInputElement>) => void" }
			}
		},
		onBlur: {
			action: "onBlur",
			description: "Callback function called when the input loses focus.",
			table: {
				type: { summary: "(e: React.FocusEvent<HTMLInputElement>) => void" }
			}
		},
		disabled: {
			control: { type: "boolean" },
			description: "Disables the input.",
			table: {
				type: { summary: "boolean" }
			}
		},
		placeholder: {
			control: { type: "text" },
			description: "Placeholder text for the input.",
			table: {
				type: { summary: "string" }
			}
		},
		isError: {
			action: "isError",
			description: "Function to determine if there's an error.",
			table: {
				type: { summary: "(err: { [name: string]: string }) => void" }
			}
		},
		onCopy: {
			action: "onCopy",
			description: "Callback function called on copy event.",
			table: {
				type: { summary: "(e: ClipboardEvent) => void" }
			}
		},
		onCut: {
			action: "onCut",
			description: "Callback function called on cut event.",
			table: {
				type: { summary: "(e: ClipboardEvent) => void" }
			}
		},
		onContextMenu: {
			action: "onContextMenu",
			description: "Callback function called on right-click event.",
			table: {
				type: { summary: "(e: React.MouseEvent<HTMLInputElement>) => void" }
			}
		},
		inputType: {
			control: { type: "select" },
			options: ["number-psssword"],
			description: "Specifies the input type for number-password.",
			table: {
				type: { summary: '"number-psssword"' }
			}
		},
		allowNegative: {
			control: { type: "boolean" },
			description: "Allows negative values for number input.",
			table: {
				type: { summary: "boolean" }
			}
		},
		skipValidation: {
			control: { type: "boolean" },
			description: "Skips validation for the input.",
			table: {
				type: { summary: "boolean" }
			}
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
			description: "UI language for the input.",
			table: {
				type: { summary: "string" }
			}
		},
		tooltip: {
			control: { type: "text" },
			description: "Tooltip text for the input.",
			table: {
				type: { summary: "string" }
			}
		},
		hintText: {
			control: { type: "text" },
			description: "Hint text displayed below the input.",
			table: {
				type: { summary: "string" }
			}
		},
		sectionType: {
			control: { type: "select" },
			options: ["left", "right", "both"],
			description: "Specifies the section type for icons.",
			table: {
				type: { summary: '"left" | "right" | "both"' }
			}
		},
		sectionLeftIcon: {
			control: { type: "text" },
			description: "Icon displayed on the left side of the input.",
			table: {
				type: { summary: "React.ReactNode" }
			}
		},
		sectionRightIcon: {
			control: { type: "text" },
			description: "Icon displayed on the right side of the input.",
			table: {
				type: { summary: "React.ReactNode" }
			}
		},
		leftIconClass: {
			control: { type: "text" },
			description: "CSS class for the left icon.",
			table: {
				type: { summary: "string" }
			}
		},
		inputMode: {
			control: { type: "select" },
			options: ["none", "text", "tel", "url", "email", "numeric", "decimal", "search"],
			description: "Input mode for virtual keyboards.",
			table: {
				type: { summary: '"none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search"' }
			}
		}
	}
} as Meta<IMaskInputProps>;
const Template: StoryFn<IMaskInputProps> = (args) => {
	const [value, setValue] = useState(args.value);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return <MaskInput {...args} value={value} onChange={handleChange} />;
};
export const MaskedInput = Template.bind({});
MaskedInput.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip"
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter Amount",
	prefix: "$"
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "Enter percentage here",
	suffix: "%"
};

export const WithMask = Template.bind({});
WithMask.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "#### #### #### ####",
	format: "#### #### #### ####",
	mask: "_"
};

export const WithFormat = Template.bind({});
WithFormat.args = {
	id: "text-input",
	name: "text-input",
	label: "Text Input",
	required: false,
	formSubmitted: true,
	tooltip: "This is a tooltip",
	placeholder: "#### #### #### ####",
	format: "#### #### #### ####"
};
