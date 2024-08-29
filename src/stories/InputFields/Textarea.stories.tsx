// src/components/Button.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { InputField, ITextareaProps, ITextField, Textarea } from "../../main"; // Adjust the import path as needed
import { useState } from "react";
import { EnvelopeSimple } from "@phosphor-icons/react";
export default {
	title: "payzli-ui/Components/InputFields/Textarea",
	component: Textarea,
	tags: ["autodocs", "test"],
	parameters: {
		layout: "centered"
	},
	argTypes: {
		id: {
			control: { type: "text" },
			description: "Unique identifier for the textarea.",
			table: {
				type: { summary: "string" }
			}
		},
		rows: {
			control: { type: "number" },
			description: "Number of rows in the textarea.",
			table: {
				defaultValue: { summary: "4" },
				type: { summary: "number" }
			}
		},
		value: {
			control: { type: "text" },
			description: "The current value of the textarea.",
			table: {
				type: { summary: "string | number" }
			}
		},
		onChange: {
			action: "onChange",
			description: "Callback function called when the value changes.",
			table: {
				type: { summary: "(e: React.ChangeEvent<HTMLTextAreaElement>) => void" }
			}
		},
		className: {
			control: { type: "text" },
			description: "CSS class for the textarea.",
			table: {
				type: { summary: "string" }
			}
		},
		required: {
			control: { type: "boolean" },
			description: "Indicates if the textarea is required.",
			table: {
				defaultValue: { summary: "false" },
				type: { summary: "boolean" }
			}
		},
		formSubmitted: {
			control: { type: "boolean" },
			description: "Indicates if the form has been submitted.",
			table: {
				type: { summary: "boolean" }
			}
		},
		name: {
			control: { type: "text" },
			description: "Name attribute of the textarea.",
			table: {
				type: { summary: "string" }
			}
		},
		label: {
			control: { type: "text" },
			description: "Label for the textarea.",
			table: {
				type: { summary: "string" }
			}
		},

		errorMessage: {
			control: { type: "text" },
			description: "Error message displayed for the textarea.",
			table: {
				type: { summary: "string" }
			}
		},
		formClass: {
			control: { type: "text" },
			description: "CSS class for the form wrapping the textarea.",
			table: {
				type: { summary: "string" }
			}
		},
		maxLength: {
			control: { type: "number" },
			description: "Maximum number of characters allowed in the textarea.",
			table: {
				type: { summary: "number" }
			}
		},
		minLength: {
			control: { type: "number" },
			description: "Minimum number of characters required in the textarea.",
			table: {
				type: { summary: "number" }
			}
		},
		onBlur: {
			action: "onBlur",
			description: "Callback function called when the textarea loses focus.",
			table: {
				type: { summary: "(e: React.FocusEvent<HTMLTextAreaElement>) => void" }
			}
		},
		disabled: {
			control: { type: "boolean" },
			description: "Disables the textarea.",
			table: {
				type: { summary: "boolean" }
			}
		},
		hideMaxLength: {
			control: { type: "boolean" },
			description: "Hides the max length indicator.",
			table: {
				type: { summary: "boolean" }
			}
		},
		maxLengthPos: {
			control: { type: "select" },
			options: ["bottom", "top", "bottom_left"],
			description: "Position of the max length indicator.",
			table: {
				type: { summary: '"bottom" | "top" | "bottom_left"' }
			}
		},
		placeholder: {
			control: { type: "text" }
		},
		customPosClassName: {
			control: { type: "text" },
			description: "Custom CSS class for positioning elements.",
			table: {
				type: { summary: "string" }
			}
		},
		UiLanguage: {
			control: { type: "text" },
			description: "UI language for the textarea.",
			table: {
				type: { summary: "string" }
			}
		},
		hintText: {
			control: { type: "text" },
			description: "Hint text displayed below the textarea.",
			table: {
				type: { summary: "string" }
			}
		},

		transformPhrase: {
			description: "transformPhrase method to transform few row texts with the help of UI language",
			table: {
				type: { summary: "(phrase: string, UiLanguage: string, {}: options) => string" }
			}
		}
	}
} as Meta<ITextareaProps>;
const Template: StoryFn<ITextareaProps> = (args) => {
	const [value, setValue] = useState(args.value);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return <Textarea {...args} value={value} onChange={handleChange} />;
};
export const TextInput = Template.bind({});
TextInput.args = {
	id: "textarea",
	rows: 4,
	placeholder: "write...",
	className: "",
	required: false,
	formSubmitted: true,
	name: "textarea",
	label: "Textarea"
};

export const TextInputWithMaxLength = Template.bind({});
TextInputWithMaxLength.args = {
	id: "textarea",
	rows: 4,
	placeholder: "write...",
	className: "",
	required: false,
	formSubmitted: true,
	maxLength: 100,
	name: "textarea",
	label: "Textarea"
};
