// src/components/Breadcrumbs.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Breadcrumbs from "./Breadcrumbs"; // Adjust the import path as needed
import { IBreadcrumbs } from "../../models/IBreadcrumb";

// Example icon components (use your actual icon components)
const HomeIcon = () => <span>🏠</span>;
const Separator = () => <span> / </span>;

const breadcrumbItems = [
	{ title: "Home", path: "/", active: false, customComp: <HomeIcon /> },
	{ title: "Category", path: "/category", active: false },
	{ title: "Subcategory", path: "/subcategory", active: true }
];

export default {
	title: "Components/Breadcrumbs",
	component: Breadcrumbs
} as Meta;

const Template: StoryFn<IBreadcrumbs> = (args: IBreadcrumbs) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
	homeIcon: <HomeIcon />,
	seprator: <Separator />,
	breadcrumbs: breadcrumbItems,
	className: "default-class",
	homeRoute: "/homepage",
	type: "primary"
};

export const SecondaryType = Template.bind({});
SecondaryType.args = {
	homeIcon: <HomeIcon />,
	seprator: <Separator />,
	breadcrumbs: breadcrumbItems,
	className: "secondary-class",
	homeRoute: "/homepage",
	type: "secondary"
};

export const TertiaryType = Template.bind({});
TertiaryType.args = {
	homeIcon: <HomeIcon />,
	seprator: <Separator />,
	breadcrumbs: breadcrumbItems,
	className: "tertiary-class",
	homeRoute: "/homepage",
	type: "tertiary"
};

export const CustomComponents = Template.bind({});
CustomComponents.args = {
	homeIcon: <HomeIcon />,
	seprator: <Separator />,
	breadcrumbs: [
		{ title: "Dashboard", path: "/dashboard" },
		{ title: "Settings", path: "/settings" },
		{ title: "Profile", path: "/profile", active: true, customComp: <span>👤</span> }
	],
	className: "custom-class",
	homeRoute: "/home"
};

export const HiddenBreadcrumbs = Template.bind({});
HiddenBreadcrumbs.args = {
	homeIcon: <HomeIcon />,
	seprator: <Separator />,
	breadcrumbs: [
		{ title: "Home", path: "/", hidden: true },
		{ title: "Admin", path: "/admin", hidden: true },
		{ title: "Dashboard", path: "/dashboard", active: true }
	],
	className: "hidden-class",
	homeRoute: "/homepage"
};
