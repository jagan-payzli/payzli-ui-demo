import React from "react";
import Section from "../components/Section";
import { Button, Popover, Typography } from "../components";
import { CaretDown, CaretRight } from "@phosphor-icons/react";

const PopoverSection = () => {
	return (
		<Section title={"#Popover"}>
			<Typography>Popover - click</Typography>
			<div className="d-flex gap3 mb-3 flex-wrap">
				<Popover
					target={
						<Button
							variant="secondary"
							iconPosition="right"
							rightIcon={<CaretDown weight="bold" />}
							onClick={() => {}}
							label={"Bottom Right"}
						/>
					}
					position="bottom-right"
					parentClass="p-2"
				>
					<Typography type="text" size="lg">
						Popup Title
					</Typography>
					<div>
						<Typography color="muted">Popover content</Typography>
					</div>
				</Popover>
				<Popover
					target={
						<Button
							variant="secondary"
							iconPosition="right"
							rightIcon={<CaretDown weight="bold" />}
							onClick={() => {}}
							label={"Bottom Left"}
						/>
					}
					position="bottom-left"
					parentClass="p-2"
				>
					<Typography type="text" size="lg">
						Popup Title
					</Typography>
					<div>
						<Typography color="muted">Popover content</Typography>
					</div>
				</Popover>
				<Popover
					target={
						<Button variant="secondary" iconPosition="right" rightIcon={<CaretDown weight="bold" />} onClick={() => {}} label={"Top"} />
					}
					position="top"
					parentClass="p-2"
				>
					<Typography type="text" size="lg">
						Popup Title
					</Typography>
					<div>
						<Typography color="muted">Popover content</Typography>
					</div>
				</Popover>
				<Popover
					target={
						<Button
							variant="secondary"
							iconPosition="right"
							rightIcon={<CaretDown weight="bold" />}
							onClick={() => {}}
							label={"Bottom"}
						/>
					}
					position="bottom"
					parentClass="p-2"
				>
					<Typography type="text" size="lg">
						Popup Title
					</Typography>
					<div>
						<Typography color="muted">Popover content</Typography>
					</div>
				</Popover>
				<Popover
					target={
						<Button variant="secondary" iconPosition="right" rightIcon={<CaretDown weight="bold" />} onClick={() => {}} label={"Left"} />
					}
					position="left"
					parentClass="p-2"
				>
					<Typography type="text" size="lg">
						Popup Title
					</Typography>
					<div>
						<Typography color="muted">Popover content</Typography>
					</div>
				</Popover>
				<Popover
					target={
						<Button variant="secondary" iconPosition="right" rightIcon={<CaretDown weight="bold" />} onClick={() => {}} label={"Right"} />
					}
					position="right"
					parentClass="p-2"
				>
					<Typography type="text" size="lg">
						Popup Title
					</Typography>
					<div>
						<Typography color="muted">Popover content</Typography>
					</div>
				</Popover>
			</div>
			<Typography>Popover - hover</Typography>
			<div className="d-flex gap3 mb-3 flex-wrap">
				<Popover
					target={
						<Button
							variant="secondary"
							iconPosition="right"
							rightIcon={<CaretDown weight="bold" />}
							onClick={() => {}}
							label={"Hover Me"}
						/>
					}
					position="bottom-right"
					parentClass="p-2"
					hoverTrigger={true}
				>
					<Typography type="text" size="lg">
						Popup Title
					</Typography>
					<div>
						<Typography color="muted">Popover content</Typography>
					</div>
				</Popover>
				<Popover
					target={
						<Button
							variant="secondary"
							iconPosition="right"
							rightIcon={<CaretDown weight="bold" />}
							onClick={() => {}}
							label={"Hover Me"}
						/>
					}
					position="bottom-right"
					parentClass="p-2"
					hoverTrigger={true}
					disableHoverOut={true}
				>
					<Typography type="text" size="lg">
						Popup Title
					</Typography>
					<div>
						<Typography color="muted">This popup will not close on Hover Out</Typography>
					</div>
				</Popover>
			</div>
		</Section>
	);
};

export default PopoverSection;
