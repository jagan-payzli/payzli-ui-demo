import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { Button, PopupSelect, Typography } from "../components";
import Section from "../components/Section";
import { ISelectInput } from "../models";

const ISelectPopup = () => {
	const [selected, setSelected] = useState<ISelectInput | null>(null);
	const handleSelect = (event: ISelectInput) => {
		setSelected(event);
	};
	const options = [
		{ label: "USD", value: "USD", code: "USD", symbol: "$" },
		{ label: "INR", value: "INR", code: "INR", symbol: "₹" }
	];

	return (
		<Section title={"# Select"}>
			<Typography>PopupSelect </Typography>
			<div className="d-flex gap3 mb-3 flex-wrap">
				<PopupSelect
					target={
						<Button
							label={"Select Currency"}
							variant={"secondary"}
							iconPosition="right"
							rightIcon={<CaretDown weight="bold" />}
							onClick={() => {}}
						/>
					}
					value={selected}
					setValue={handleSelect}
					selectOptions={options}
					popupParentClass="mt-1"
					// isLoading={isPartnerLoading}
				/>
			</div>
		</Section>
	);
};

export default ISelectPopup;
