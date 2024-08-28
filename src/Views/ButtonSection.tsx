import React from "react";
import Section from "../components/Section";
import { defaultOnClick } from "../utils/functions";
import { Button, Typography } from "../components";
import DropButton from "../components/Button/DropButton";
import IconButton from "../components/IconButton";

const ButtonSection = () => {
	const handleDropdownClick = () => {
		alert("Dropdown clicked");
	};
	return (
		<Section title={"# Buttons"}>
			<Typography>Drop Button Primary</Typography>
			<div className="d-flex gap3 mb-3 flex-wrap">
				<DropButton
					buttonType="dropdown"
					onClick={defaultOnClick}
					onDropdownClick={handleDropdownClick}
					label={"Add Lead"}
					leftIcon={<i className="ph-bold ph-plus" />}
					variant={"primary"}
					position="bottom"
				>
					<ul>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
					</ul>
				</DropButton>
				<DropButton
					buttonType="dropdown"
					onClick={defaultOnClick}
					onDropdownClick={handleDropdownClick}
					label={"Add Lead"}
					leftIcon={<i className="ph-bold ph-plus" />}
					position="top"
					variant={"secondary"}
				>
					<ul>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
					</ul>
				</DropButton>
				<DropButton
					buttonType="dropdown"
					onClick={defaultOnClick}
					onDropdownClick={handleDropdownClick}
					label={"Add Lead"}
					leftIcon={<i className="ph-bold ph-plus" />}
					variant={"tertiary"}
					position="left"
				>
					<ul>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
					</ul>
				</DropButton>
				<DropButton
					buttonType="dropdown"
					onClick={defaultOnClick}
					onDropdownClick={handleDropdownClick}
					label={"Add Lead"}
					rightIcon={<i className="ph-bold ph-circle" />}
					leftIcon={<i className="ph-bold ph-plus" />}
					iconPosition="both"
					variant={"primary"}
					position="right"
				>
					<ul>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
					</ul>
				</DropButton>
				<DropButton
					buttonType="dropdown"
					onClick={defaultOnClick}
					onDropdownClick={handleDropdownClick}
					label={"Add Lead"}
					variant={"none"}
					position="bottom-right"
				>
					<ul>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
					</ul>
				</DropButton>
				<DropButton
					buttonType="dropdown"
					onClick={defaultOnClick}
					onDropdownClick={handleDropdownClick}
					label={"Add Lead"}
					leftIcon={<i className="ph-bold ph-plus" />}
					variant={"primary"}
					position="bottom-left"
					dropdownIcon={
						<IconButton className="p-3 dropdown_icon_button" onClick={() => {}} variant={"primary"}>
							<i className="ph-bold ph-caret-up"></i>
						</IconButton>
					}
				>
					<ul>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
						<li>Hello world</li>
					</ul>
				</DropButton>
				{/* <DropButton
					buttonType="dropdown"
					onClick={defaultOnClick}
					onDropdownClick={handleDropdownClick}
					label={"Add Lead"}
					leftIcon={<i className="ph-bold ph-plus" />}
					variant={"secondary"}
				/>
				<DropButton
					buttonType="dropdown"
					onClick={defaultOnClick}
					onDropdownClick={handleDropdownClick}
					label={"Add Lead"}
					leftIcon={<i className="ph-bold ph-plus" />}
					variant={"tertiary"}
				/>
				<DropButton
					buttonType="dropdown"
					onClick={defaultOnClick}
					onDropdownClick={handleDropdownClick}
					label={"Add Lead"}
					leftIcon={<i className="ph-bold ph-plus" />}
					disabled={true}
					variant={"primary"}
				/>
				<DropButton
					buttonType="dropdown"
					onClick={defaultOnClick}
					onDropdownClick={handleDropdownClick}
					label={"Click Me"}
					variant={"primary"}
				/>
				<DropButton
					buttonType="dropdown"
					onClick={defaultOnClick}
					onDropdownClick={handleDropdownClick}
					label={"Add Lead"}
					rightIcon={<i className="ph-bold ph-circle" />}
					leftIcon={<i className="ph-bold ph-plus" />}
					iconPosition="both"
					variant={"primary"}
				/> */}
				{/* <DropButton buttonType="dropdown" onClick={defaultOnClick} label={"Custop drop component"} variant={"primary"}>
					<IconButton className="p-2 dropdown_icon_button" onClick={handleDropdownClick} variant={"primary"}>
						<i className="ph-bold ph-caret-up"></i>
					</IconButton>
				</DropButton> */}
			</div>
			<Typography color="muted">buttonType="button"</Typography>
			<div className="d-flex gap1 mb-3">
				<Button onClick={defaultOnClick} buttonType="button" label={"Button Primary"} variant={"primary"} />
				<Button onClick={defaultOnClick} buttonType="button" label={"Button Secondary"} variant={"secondary"} />
				<Button onClick={defaultOnClick} buttonType="button" label={"Button Tertiary"} variant={"tertiary"} />
				<Button onClick={defaultOnClick} buttonType="button" label={"Button Disabled"} disabled variant={"primary"} />
				<Button
					onClick={defaultOnClick}
					buttonType="button"
					label={"Button Primary with icon"}
					variant={"primary"}
					iconComp={<i className="ph-fill ph-heart"></i>}
				/>
			</div>
			<Typography color="muted">buttonType="text"</Typography>
			<div className="d-flex gap1 mb-3">
				<Button onClick={defaultOnClick} buttonType="text" label={"Button Primary"} variant={"primary"} />
				<Button onClick={defaultOnClick} buttonType="text" label={"Button Secondary"} variant={"secondary"} />
				<Button onClick={defaultOnClick} buttonType="text" label={"Button Disabled"} disabled variant={"primary"} />
				<Button
					onClick={defaultOnClick}
					buttonType="text"
					label={"Button Primary with icon"}
					variant={"primary"}
					iconComp={<i className="ph-fill ph-heart"></i>}
				/>
			</div>
			<Typography color="muted">buttonType="link"</Typography>
			<div className="d-flex gap1 mb-3">
				<Button onClick={defaultOnClick} buttonType="link" label={"Button Primary"} variant={"primary"} />
				<Button onClick={defaultOnClick} buttonType="link" label={"Button Secondary"} variant={"secondary"} />
				<Button onClick={defaultOnClick} buttonType="link" label={"Button Disabled"} disabled variant={"primary"} />
			</div>
			<Typography color="muted">buttonType="button" with icon</Typography>
			<div className="d-flex gap1 mb-3">
				<Button
					onClick={defaultOnClick}
					buttonType="button"
					label={"Left Icon"}
					variant={"primary"}
					iconPosition="left"
					iconComp={<i className="ph-fill ph-heart"></i>}
				/>
				<Button
					onClick={defaultOnClick}
					buttonType="button"
					label={"Right Icon"}
					variant={"tertiary"}
					iconPosition="right"
					iconComp={<i className="ph-fill ph-heart"></i>}
				/>
				<Button
					onClick={defaultOnClick}
					buttonType="button"
					label={"Icon Both Sides"}
					variant={"secondary"}
					iconPosition="both"
					iconComp={<i className="ph-fill ph-heart"></i>}
				/>
			</div>
		</Section>
	);
};

export default ButtonSection;
