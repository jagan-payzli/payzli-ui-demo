import { Heart } from "@phosphor-icons/react";
import { Tab, Tabs, Typography } from "../components";
import { useState } from "react";
import Section from "../components/Section";

const TabsSection = () => {
	const [state, setState] = useState<any>({
		primary: "tab2",
		secondary: "tab1"
	});
	const handleChange = (event: any, newValue: any) => {
		const key = event.currentTarget.getAttribute("type");
		setState({ ...state, [key]: newValue });
	};
	return (
		<Section title={"# Tabs"}>
			<Typography>Button Tabs - sm / md</Typography>
			<div className="d-flex flex-wrap gap1 w-100 card">
				<Tabs onChange={handleChange} className="w-100" value={state.button} type="button" size="sm">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
					<Tab value="tab4" label="Tab 4" disabled={true} />
				</Tabs>
				<Tabs onChange={handleChange} className="w-100" value={state.button} type="button" size="md">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
					<Tab value="tab4" label="Tab 4" disabled={true} />
				</Tabs>
			</div>

			<Typography>Primary Tabs - sm / md</Typography>
			<div className="d-flex flex-wrap gap1 w-100 card">
				<Tabs onChange={handleChange} className="w-100" value={state.primary} type="primary" size="sm">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
					<Tab value="tab4" label="Tab 4" disabled={true} />
				</Tabs>
				<Tabs onChange={handleChange} className="w-100" value={state.primary} type="primary" size="md">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
					<Tab value="tab4" label="Tab 4" disabled={true} />
				</Tabs>
			</div>

			<Typography>Secondary Tabs - sm / md</Typography>
			<div className="d-flex flex-wrap gap1 w-100 card">
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="secondary" size="sm">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
					<Tab value="tab4" label="Tab 4" disabled={true} />
				</Tabs>
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="secondary" size="md">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
					<Tab value="tab4" label="Tab 4" disabled={true} />
				</Tabs>
			</div>
			<Typography>Tertiary Tabs - sm / md</Typography>
			<div className="d-flex flex-wrap gap1 w-100 card">
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="tertiary" size="sm">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
					<Tab value="tab4" label="Tab 4" disabled={true} />
				</Tabs>
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="tertiary" size="md">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
					<Tab value="tab4" label="Tab 4" disabled={true} />
				</Tabs>
			</div>
			<Typography>Underline Tabs - sm / md</Typography>
			<div className="d-flex flex-wrap gap1 w-100 card">
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="underline" size="sm">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" badge={<Heart />} />
					<Tab value="tab4" label="Tab 4" disabled={true} badge={"2"} />
				</Tabs>
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="underline" size="md" fullwidth={true}>
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" badge={"3"} />
					<Tab value="tab4" label="Tab 4" disabled={true} />
				</Tabs>
			</div>
			<Typography>Underline Filled Tabs - sm / md</Typography>
			<div className="d-flex flex-wrap gap1 w-100 card">
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="underline-primary" size="sm">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
					<Tab value="tab4" label="Tab 4" disabled={true} />
				</Tabs>
				<Tabs onChange={handleChange} className="w-100" value={state.secondary} type="underline-primary" size="md">
					<Tab value="tab1" label="Tab 1" />
					<Tab value="tab2" label="Tab 2" />
					<Tab value="tab3" label="Tab 3" />
					<Tab value="tab4" label="Tab 4" disabled={true} />
				</Tabs>
			</div>
		</Section>
	);
};

export default TabsSection;
