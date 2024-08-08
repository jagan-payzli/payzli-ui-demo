import React from "react";
interface ISectionProps {
	title: string;
	children: React.ReactNode;
	className?: string;
}
const Section = (props: ISectionProps) => {
	return (
		<div className={`section paddingXY ${props.className ?? ""}`}>
			<h3>{props.title}</h3>
			<div className="section_body">{props.children}</div>
		</div>
	);
};

export default Section;
