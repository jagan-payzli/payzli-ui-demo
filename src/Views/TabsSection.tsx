import React, { useState } from "react";
import Section from "../components/Section";
import Tabs from "./Tabs/Tabs";
import Tab from "./Tabs/Tab";
import { Typography } from "payzli-ui";

const TabsSection = () => {
	const [state, setState] = useState({
		primary: "tab2",
		secondary: "tab1"
	});
	const handleChange = (event: any, newValue: any) => {
		const key = event.currentTarget.getAttribute("type");
		setState({ ...state, [key]: newValue });
	};
	return (
		<Section title={"# Tabs"}>
			<Typography>Primary Tabs - sm / md</Typography>
			<div className="d-flex flex-wrap gap1 w-100 card">
				<Tabs onChange={handleChange} className="w-100" value={state.primary} type="primary" size="sm">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
				</Tabs>
				<Tabs onChange={handleChange} className="w-100" value={state.primary} type="primary" size="md">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
				</Tabs>
			</div>

			<Typography>Secondary Tabs - sm / md</Typography>
			<div className="d-flex flex-wrap gap1 w-100 card">
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="secondary" size="sm">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
				</Tabs>
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="secondary" size="md">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
				</Tabs>
			</div>
			<Typography>Tertiary Tabs - sm / md</Typography>
			<div className="d-flex flex-wrap gap1 w-100 card">
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="tertiary" size="sm">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
				</Tabs>
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="tertiary" size="md">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
				</Tabs>
			</div>
			<Typography>Underline Tabs - sm / md</Typography>
			<div className="d-flex flex-wrap gap1 w-100 card">
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="underline" size="sm">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
				</Tabs>
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="underline" size="md">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
				</Tabs>
			</div>
			<Typography>Underline Filled Tabs - sm / md</Typography>
			<div className="d-flex flex-wrap gap1 w-100 card">
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="underline-primary" size="sm">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
				</Tabs>
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="underline-primary" size="md">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
				</Tabs>
			</div>
		</Section>
	);
};

export default TabsSection;
