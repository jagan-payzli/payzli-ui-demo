import React from "react";
import { Breadcrumbs } from "payzli-ui";
import Section from "../components/Section";

const BreadcrumbSection = () => {
	return (
		<Section title={"# Breadcrumbs"}>
			<div className="d-flex flex-direction-column">
				<Breadcrumbs
					breadcrumbs={[
						{
							title: "Homepage",
							path: "/residuals",
							active: false
						},
						{
							title: "Merchants",
							path: "/merchants",
							active: true
						},
						{
							title: "Merchant Profile",
							path: "/merchants/profile",
							active: true
						}
					]}
				/>
				<Breadcrumbs
					type="secondary"
					seprator={<i className="ph-bold rotate25 ph-line-vertical"></i>}
					breadcrumbs={[
						{
							title: "Homepage",
							path: "/residuals",
							active: false
						},
						{
							title: "Merchants",
							path: "/merchants",
							active: true
						},
						{
							title: "Merchant Profile",
							path: "/merchants/profile",
							active: true
						}
					]}
				/>
				<Breadcrumbs
					type="tertiary"
					breadcrumbs={[
						{
							title: "Homepage",
							path: "/residuals",
							active: false
						},
						{
							title: "Merchants",
							path: "/merchants",
							active: true
						},
						{
							title: "Merchant Profile",
							path: "/merchants/profile",
							active: true
						}
					]}
				/>
			</div>
		</Section>
	);
};

export default BreadcrumbSection;
