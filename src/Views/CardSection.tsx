import React from "react";
import Section from "../components/Section";
import { Card } from "../components";

const CardSection = () => {
	return (
		<Section title={"# Buttons"}>
			<div className="d-flex flex-wrap gap1">
				<Card className="d-flex" size={"xxl"}>
					<div className="">
						<h1>Card Title - XXL</h1>
						<p>Card Content</p>
					</div>
				</Card>
				<Card className="d-flex" size={"xl"}>
					<div className="">
						<h2>Card Title - XL</h2>
						<p>Card Content</p>
					</div>
				</Card>
				<Card className="d-flex" size={"lg"}>
					<div className="">
						<h3>Card Title - LG</h3>
						<p>Card Content</p>
					</div>
				</Card>
				<Card className="d-flex" size={"md"}>
					<div className="">
						<h4>Card Title - MD</h4>
						<p>Card Content</p>
					</div>
				</Card>

				<Card className="d-flex" size={"sm"}>
					<div className="">
						<h5>Card Title - SM</h5>
						<p>Card Content</p>
					</div>
				</Card>
				<Card className="d-flex" size={"xs"}>
					<div className="">
						<h6>Card Title - XS</h6>
						<p>Card Content</p>
					</div>
				</Card>
			</div>
		</Section>
	);
};

export default CardSection;
