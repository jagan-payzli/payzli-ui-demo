import React from "react";
import Section from "../components/Section";
import { Accordion } from "../components";

const AccordionSection = () => {
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<Section title={"# Accordion"}>
			<div className="d-flex gap1">
				<Accordion onClick={handleClick} title={"Convert pixels to REM"} id="ac1" open={open}>
					<div className="p-3">
						EM vs. REM: The differences Inside a sinlge document, the length of a REM unit is everywhere the same, it can just differ
						between documents. EM on the other side can differ between every element, because it is relative to the elements own font-size
						(excpetion is the font-size itself, in it EM is relative to the parent).
					</div>
				</Accordion>
			</div>
			<div className="d-flex gap1">
				<Accordion
					onClick={handleClick}
					title={"Convert pixels to REM"}
					id="ac2"
					open={open}
					subtitle="The length of a REM unit is everywhere the same"
				>
					<div className="p-3">
						EM vs. REM: The differences Inside a sinlge document, the length of a REM unit is everywhere the same, it can just differ
						between documents. EM on the other side can differ between every element, because it is relative to the elements own font-size
						(excpetion is the font-size itself, in it EM is relative to the parent).
					</div>
				</Accordion>
			</div>
		</Section>
	);
};

export default AccordionSection;
