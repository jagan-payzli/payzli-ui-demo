// src/components/Button.stories.tsx
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Accordion, IAccordion } from "../main"; // Adjust the import path as needed
import { useState } from "react";

export default {
	title: "payzli-ui/Components/Accordion",
	component: Accordion,
	tags: ["autodocs", "test"],
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			description: {
				component:
					"This is a detailed description of the MyComponent. It explains what the component does, how it behaves, and when to use it."
			}
		}
	},
	argTypes: {
		onClick: {
			action: "onClick"
		},
		title: {
			control: { type: "text" },
			description: "The title of the accordion"
		},
		open: {
			control: { type: "boolean" },
			defaultValue: false
		},
		subtitle: {
			control: { type: "text" }
		},
		headerClass: {
			control: { type: "text" },
			defaultValue: "bg-gray-200"
		},
		bodyClass: {
			control: { type: "text" }
		},
		class: {
			control: { type: "text" }
		},
		openHeaderClass: {
			control: { type: "text" }
		},
		children: {
			control: { type: "object" }
		},
		titleComponent: {
			control: { type: "object" }
		},
		flat: {
			control: { type: "boolean" }
		},
		titleClass: {
			control: { type: "text" }
		},
		subtitleClass: {
			control: { type: "text" }
		},
		id: {
			control: { type: "text" }
		}
	}
} as Meta<IAccordion>;

const Template: StoryFn<IAccordion> = (args) => {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<Accordion {...args} onClick={handleClick} open={open}>
			<div className="p-3">
				EM vs. REM: The differences Inside a sinlge document, the length of a REM unit is everywhere the same, it can just differ between
				documents. EM on the other side can differ between every element, because it is relative to the elements own font-size (excpetion is
				the font-size itself, in it EM is relative to the parent).
			</div>
		</Accordion>
	);
};

export const SimpleAccordion = Template.bind({});
SimpleAccordion.args = {
	title: "Convert pixels to REM",
	subtitle: "The length of a REM unit is everywhere the same",
	id: "ac1",
	open: false
};

export const FlatAccordion = Template.bind({});
FlatAccordion.args = {
	title: "Convert pixels to REM",
	id: "ac1",
	flat: true,
	open: false
};
