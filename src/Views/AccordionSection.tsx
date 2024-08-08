import React from "react";
import Section from "../components/Section";
// import { Accordion } from "payzli-ui";

const AccordionSection = () => {
	const [open, setOpen] = React.useState<boolean>(true);
	const handleClick = (evt: any) => {
		// console.log("evt", evt);
		// setOpen(!open);
	};
	return (
		<Section title={"# Accordion"}>
			<div className="d-flex gap1">
				{/* <Accordion
					onClick={handleClick}
					bodyClass="p-1 transparent-accordion"
					headerClass="bg-white px-3"
					openHeaderClass="table-bdy"
					title={"Convert pixels to REM"}
					open={open}
					subtitle={
						"This calculator converts pixels to the CSS unit REM. The conversion is based on the default font-size of 16 pixel, but can be changed."
					}
				>
					<div className="p-3">
						EM vs. REM: The differences Inside a sinlge document, the length of a REM unit is everywhere the same, it can just differ
						between documents. EM on the other side can differ between every element, because it is relative to the elements own font-size
						(excpetion is the font-size itself, in it EM is relative to the parent).
					</div>
				</Accordion> */}
			</div>
		</Section>
	);
};

export default AccordionSection;
