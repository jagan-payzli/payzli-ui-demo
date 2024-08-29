import { Meta, StoryFn } from "@storybook/react/*";
import { Button, PopupSelect } from "../../components";
import { IPopupSelect, ISelectInput } from "../../models";
import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

export default {
	title: "payzli-ui/Components/Select/SelectPopup",
	component: PopupSelect,
	tags: ["autodocs", "test"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: "Use this component for showing select options in a popup for button or an icon."
			}
		}
	},
	argTypes: {
		value: {
			control: { type: "object" },
			description: "The currently selected value.",
			table: {
				defaultValue: { summary: "null" },
				type: { summary: "ISelectInput" }
			}
		},
		setValue: {
			action: "setValue",
			description: "Function to update the selected value.",
			table: {
				type: { summary: "(value: ISelectInput) => void" }
			}
		},
		target: {
			control: { type: "object" },
			description: "The React node that triggers the popup.",
			table: {
				defaultValue: { summary: "three dots" },
				type: { summary: "React.ReactNode" }
			}
		},
		selectOptions: {
			control: { type: "object" },
			description: "Array of selectable options.",
			table: {
				type: { summary: "ISelectInput[]" },
				defaultValue: { summary: "[]" }
			}
		},
		selectStyles: {
			control: { type: "object" },
			description: "Styles for customizing the select dropdown."
		},
		popupParentClass: {
			control: { type: "text" },
			description: "CSS class for the parent of the popup."
		},
		CustomOption: {
			control: { type: "object" },
			description: "Custom component for rendering options."
		},
		ref: {
			control: { type: "object" },
			description: "Ref for the component."
		},
		isLoading: {
			control: { type: "boolean" },
			description: "Indicates if the popup is in a loading state inside select input."
		},
		handlePopupVisible: {
			action: "handlePopupVisible",
			description: "Callback to handle popup visibility state.",
			table: {
				type: { summary: "(visible: boolean) => void" }
			}
		}
	}
} as Meta;

const options = [
	{ label: "USD", value: "USD", code: "USD", symbol: "$" },
	{ label: "INR", value: "INR", code: "INR", symbol: "₹" }
];
const Template: StoryFn<IPopupSelect> = (args: IPopupSelect) => {
	const [selected, setSelected] = useState<ISelectInput | null>(null);
	return <PopupSelect {...args} value={selected} setValue={setSelected} selectOptions={options} />;
};

export const Default = Template.bind({});
Default.args = {
	popupParentClass: "mt-1",
	target: <Button label={"Select"} variant={"secondary"} iconPosition="right" rightIcon={<CaretDown weight="bold" />} onClick={() => {}} />
};
