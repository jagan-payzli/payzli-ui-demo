import React, { useEffect, useState } from "react";
import { IAccordion } from "../../models/IAccordion";
import Styles from "./Accordion.module.css";

const Accordion: React.FC<IAccordion> = (props: IAccordion) => {
	const [open, setOpen] = useState<boolean>(false);
	useEffect(() => {
		setOpen(props.open);
	}, [props.open]);

	const handleClick = (evt: any) => {
		props.onClick?.(evt);
	};
	return (
		<div id={props.id} className={`${Styles.accordian_card} ${props.class || ""}`}>
			<div
				onClick={handleClick}
				className={`${Styles.accordian_header} ${open ? props.openHeaderClass : ""} ${props.headerClass || "bg-smoke-light px-4"} ${
					props.flat ? Styles.flat_accordion : ""
				}`}
				ref={props.ref}
			>
				<div className="w-100">
					{props.titleComponent ? (
						props.titleComponent?.()
					) : (
						<>
							<label className={`${Styles.accordion_title} ${props.titleClass || ""}`}>{props.title}</label>
							<p className={`${Styles.accordion_subtitle} ${props.subtitleClass}`}>{props.subtitle || ""}</p>
						</>
					)}
				</div>

				<i className={`ph-bold ph-caret-${open ? "down" : "right"} d-flex my-auto ml-auto pr-3`}></i>
			</div>

			<div
				className={`${Styles.accordian_body} ${Styles.collapse} ${open ? Styles.show : Styles.hide} ${props.bodyClass || "p-4"} ${
					props.flat ? Styles.flat_accordion : ""
				}`}
			>
				{props.children}
			</div>
		</div>
	);
};
Accordion.displayName = "Accordion";
export default Accordion;
