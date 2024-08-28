// src/components/Tabs.stories.tsx
import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Tabs from "./Tabs"; // Adjust the import path as needed
import Tab from "./Tab"; // Adjust the import path as needed
import { ITabGroup } from "../../models/ITabGroup";

export default {
	title: "Components/Tabs",
	component: Tabs
} as Meta;

const Template: StoryFn<ITabGroup> = (args: ITabGroup) => {
	const [value, setValue] = useState(args.value);

	const handleChange = (event: React.MouseEvent<HTMLDivElement>, newValue: any) => {
		setValue(newValue);
		args.onChange(event, newValue);
	};

	return (
		<Tabs {...args} value={value} onChange={handleChange}>
			<Tab label="Tab 1" value="tab1" />
			<Tab label="Tab 2" value="tab2" />
			<Tab label="Tab 3" value="tab3" />
		</Tabs>
	);
};

export const Default = Template.bind({});
Default.args = {
	value: "tab1",
	onChange: (event: React.MouseEvent<HTMLDivElement>, newValue: any) => {
		console.log("Selected Tab:", newValue);
	},
	type: "primary",
	size: "md"
};

export const FullWidthTabs = Template.bind({});
FullWidthTabs.args = {
	...Default.args,
	fullwidth: true
};

export const SecondaryType = Template.bind({});
SecondaryType.args = {
	...Default.args,
	type: "secondary"
};

export const LargeSize = Template.bind({});
LargeSize.args = {
	...Default.args,
	size: "lg"
};

export const WithBadges = Template.bind({});
WithBadges.args = {
	...Default.args,
	children: (
		<>
			<Tab label="Tab 1" value="tab1" badge="New" />
			<Tab label="Tab 2" value="tab2" badge={<span className="badge">5</span>} />
			<Tab label="Tab 3" value="tab3" />
		</>
	)
};
