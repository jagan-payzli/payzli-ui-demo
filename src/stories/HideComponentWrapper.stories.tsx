// src/components/Button.stories.tsx
import { Heart } from "@phosphor-icons/react";
import { Meta, StoryObj } from "@storybook/react";
import { Card, HideComponentWrapper, IHideComponentWrapper } from "../main"; // Adjust the import path as needed

export default {
	title: "payzli-ui/Components/HideComponentWrapper",
	component: HideComponentWrapper,
	tags: ["autodocs", "test"],
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			description: {
				component: "Use this wrapper component to wrap your component to hide/show. this will completely remove the component from the DOM."
			}
		}
	},
	argTypes: {
		hidden: {
			control: { type: "boolean", defaultValue: false }
		},
		show: {
			control: { type: "boolean", defaultValue: true }
		},
		noPermission: {
			control: { type: "boolean", defaultValue: false }
		},
		label: {
			control: { type: "text" }
		},
		children: {
			control: { type: "object" }
		},
		ref: {
			control: { type: "object" }
		}
	}
} as Meta<IHideComponentWrapper>;
type Story = StoryObj<IHideComponentWrapper>;

export const HideComponent: Story = {
	name: "HideComponent",
	args: {
		hidden: true
	},
	render: (args) => (
		<HideComponentWrapper {...args}>
			<Card size={"md"}>
				<Heart size={32} />
			</Card>
		</HideComponentWrapper>
	)
};

export const ShowComponent: Story = {
	name: "ShowComponent",
	args: {
		show: true
	},
	render: (args) => (
		<HideComponentWrapper {...args}>
			<Card size={"md"}>
				<Heart size={32} />
			</Card>
		</HideComponentWrapper>
	)
};

export const NoPermissionComponent: Story = {
	name: "NoPermissionComponent",
	args: {
		noPermission: true,
		label: "You do not have permission to view this component."
	},
	render: (args) => (
		<HideComponentWrapper {...args}>
			<Card size={"md"}>
				<Heart size={32} />
			</Card>
		</HideComponentWrapper>
	)
};
