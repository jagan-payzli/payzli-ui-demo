import React from "react";
import Section from "../components/Section";
import { Card, Typography } from "../components";

const TypographySection = () => {
	return (
		<Section title={"# Typography"}>
			<div className="d-flex flex-wrap gap1">
				<Card className="d-flex" size={"xxl"}>
					<div className="d-flex flex-direction-column gap1">
						<Typography type="heading" size="xxl" fontFamily="bold">
							Heading - xxl - bold
						</Typography>
						<Typography type="heading" size="xxl" fontFamily="semibold">
							Heading - xxl - semibold
						</Typography>
						<Typography type="heading" size="xxl" fontFamily="medium">
							Heading - xxl - medium
						</Typography>
						<Typography type="heading" size="xxl" fontFamily="regular">
							Heading - xxl - regular
						</Typography>
						<Typography type="heading" size="xxl" fontFamily="thin">
							Heading - xxl - thin
						</Typography>
					</div>
				</Card>
				<Card className="d-flex" size={"xl"}>
					<div className="d-flex flex-direction-column gap1">
						<Typography type="heading" size="xl" fontFamily="bold">
							Heading - xl - bold
						</Typography>
						<Typography type="heading" size="xl" fontFamily="semibold">
							Heading - xl - semibold
						</Typography>
						<Typography type="heading" size="xl" fontFamily="medium">
							Heading - xl - medium
						</Typography>
						<Typography type="heading" size="xl" fontFamily="regular">
							Heading - xl - regular
						</Typography>
						<Typography type="heading" size="xl" fontFamily="thin">
							Heading - xl - thin
						</Typography>
					</div>
				</Card>
				<Card className="d-flex" size={"lg"}>
					<div className="d-flex flex-direction-column gap1">
						<Typography type="heading" size="lg" fontFamily="bold">
							Heading - lg - bold
						</Typography>
						<Typography type="heading" size="lg" fontFamily="semibold">
							Heading - lg - semibold
						</Typography>
						<Typography type="heading" size="lg" fontFamily="medium">
							Heading - lg - medium
						</Typography>
						<Typography type="heading" size="lg" fontFamily="regular">
							Heading - lg - regular
						</Typography>
						<Typography type="heading" size="lg" fontFamily="thin">
							Heading - lg - thin
						</Typography>
					</div>
				</Card>
				<Card className="d-flex" size={"md"}>
					<div className="d-flex flex-direction-column gap1">
						<Typography type="heading" size="md" fontFamily="bold">
							Heading - md - bold
						</Typography>
						<Typography type="heading" size="md" fontFamily="semibold">
							Heading - md - semibold
						</Typography>
						<Typography type="heading" size="md" fontFamily="medium">
							Heading - md - medium
						</Typography>
						<Typography type="heading" size="md" fontFamily="regular">
							Heading - md - regular
						</Typography>
						<Typography type="heading" size="md" fontFamily="thin">
							Heading - md - thin
						</Typography>
					</div>
				</Card>
				<Card className="d-flex" size={"sm"}>
					<div className="d-flex flex-direction-column gap1">
						<Typography type="heading" size="sm" fontFamily="bold">
							Heading - sm - bold
						</Typography>
						<Typography type="heading" size="sm" fontFamily="semibold">
							Heading - sm - semibold
						</Typography>
						<Typography type="heading" size="sm" fontFamily="medium">
							Heading - sm - medium
						</Typography>
						<Typography type="heading" size="sm" fontFamily="regular">
							Heading - sm - regular
						</Typography>
						<Typography type="heading" size="sm" fontFamily="thin">
							Heading - sm - thin
						</Typography>
					</div>
				</Card>
				<Card className="d-flex" size={"xs"}>
					<div className="d-flex flex-direction-column gap1">
						<Typography type="heading" size="xs" fontFamily="bold">
							Heading - xs - bold
						</Typography>
						<Typography type="heading" size="xs" fontFamily="semibold">
							Heading - xs - semibold
						</Typography>
						<Typography type="heading" size="xs" fontFamily="medium">
							Heading - xs - medium
						</Typography>
						<Typography type="heading" size="xs" fontFamily="regular">
							Heading - xs - regular
						</Typography>
						<Typography type="heading" size="xs" fontFamily="thin">
							Heading - xs - thin
						</Typography>
					</div>
				</Card>
			</div>
			<hr />
			<div className="d-flex flex-wrap gap1">
				<Card className="d-flex" size={"xxl"}>
					<div className="d-flex flex-direction-column gap1">
						<Typography size="xxl" fontFamily="bold">
							Text - xxl - bold
						</Typography>
						<Typography size="xxl" fontFamily="semibold">
							Text - xxl - semibold
						</Typography>
						<Typography size="xxl" fontFamily="medium">
							Text - xxl - medium
						</Typography>
						<Typography size="xxl" fontFamily="regular">
							Text - xxl - regular
						</Typography>
						<Typography size="xxl" fontFamily="thin">
							Text - xxl - thin
						</Typography>
					</div>
				</Card>
				<Card className="d-flex" size={"xl"}>
					<div className="d-flex flex-direction-column gap1">
						<Typography size="xl" fontFamily="bold">
							Text - xl - bold
						</Typography>
						<Typography size="xl" fontFamily="semibold">
							Text - xl - semibold
						</Typography>
						<Typography size="xl" fontFamily="medium">
							Text - xl - medium
						</Typography>
						<Typography size="xl" fontFamily="regular">
							Text - xl - regular
						</Typography>
						<Typography size="xl" fontFamily="thin">
							Text - xl - thin
						</Typography>
					</div>
				</Card>
				<Card className="d-flex" size={"lg"}>
					<div className="d-flex flex-direction-column gap1">
						<Typography size="lg" fontFamily="bold">
							Text - lg - bold
						</Typography>
						<Typography size="lg" fontFamily="semibold">
							Text - lg - semibold
						</Typography>
						<Typography size="lg" fontFamily="medium">
							Text - lg - medium
						</Typography>
						<Typography size="lg" fontFamily="regular">
							Text - lg - regular
						</Typography>
						<Typography size="lg" fontFamily="thin">
							Text - lg - thin
						</Typography>
					</div>
				</Card>
				<Card className="d-flex" size={"md"}>
					<div className="d-flex flex-direction-column gap1">
						<Typography size="md" fontFamily="bold">
							Text - md - bold
						</Typography>
						<Typography size="md" fontFamily="semibold">
							Text - md - semibold
						</Typography>
						<Typography size="md" fontFamily="medium">
							Text - md - medium
						</Typography>
						<Typography size="md" fontFamily="regular">
							Text - md - regular
						</Typography>
						<Typography size="md" fontFamily="thin">
							Text - md - thin
						</Typography>
					</div>
				</Card>
				<Card className="d-flex" size={"sm"}>
					<div className="d-flex flex-direction-column gap1">
						<Typography size="sm" fontFamily="bold">
							Text - sm - bold
						</Typography>
						<Typography size="sm" fontFamily="semibold">
							Text - sm - semibold
						</Typography>
						<Typography size="sm" fontFamily="medium">
							Text - sm - medium
						</Typography>
						<Typography size="sm" fontFamily="regular">
							Text - sm - regular
						</Typography>
						<Typography size="sm" fontFamily="thin">
							Text - sm - thin
						</Typography>
					</div>
				</Card>
				<Card className="d-flex" size={"xs"}>
					<div className="d-flex flex-direction-column gap1">
						<Typography size="xs" fontFamily="bold">
							Text - xs - bold
						</Typography>
						<Typography size="xs" fontFamily="semibold">
							Text - xs - semibold
						</Typography>
						<Typography size="xs" fontFamily="medium">
							Text - xs - medium
						</Typography>
						<Typography size="xs" fontFamily="regular">
							Text - xs - regular
						</Typography>
						<Typography size="xs" fontFamily="thin">
							Text - xs - thin
						</Typography>
					</div>
				</Card>
			</div>
		</Section>
	);
};

export default TypographySection;
