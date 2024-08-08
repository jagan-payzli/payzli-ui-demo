import React from "react";
import Section from "../components/Section";
import { defaultOnClick } from "../utils/functions";
import { Button } from "payzli-ui";

const ButtonSection = () => {
	return (
		<Section title={"# Buttons"}>
			<div className="d-flex gap1">
				<Button onClick={defaultOnClick} buttonType="button" label={"Button Primary"} variant={"primary"} />
				<Button onClick={defaultOnClick} buttonType="button" label={"Button Secondary"} variant={"secondary"} />
				<Button onClick={defaultOnClick} buttonType="button" label={"Button Tertiary"} variant={"tertiary"} />
				<Button onClick={defaultOnClick} buttonType="button" label={"Button Disabled"} disabled variant={"primary"} />
				<Button
					onClick={defaultOnClick}
					buttonType="button"
					label={"Button Primary with icon"}
					variant={"primary"}
					iconComp={() => <i className="ph-fill ph-heart"></i>}
				/>
			</div>
			<div className="d-flex gap1">
				<Button onClick={defaultOnClick} buttonType="text" label={"Button Primary"} variant={"primary"} />
				<Button onClick={defaultOnClick} buttonType="text" label={"Button Secondary"} variant={"secondary"} />
				<Button onClick={defaultOnClick} buttonType="text" label={"Button Disabled"} disabled variant={"primary"} />
				<Button
					onClick={defaultOnClick}
					buttonType="text"
					label={"Button Primary with icon"}
					variant={"primary"}
					iconComp={() => <i className="ph-fill ph-heart"></i>}
				/>
			</div>
			<div className="d-flex gap1">
				<Button onClick={defaultOnClick} buttonType="link" label={"Button Primary"} variant={"primary"} />
				<Button onClick={defaultOnClick} buttonType="link" label={"Button Secondary"} variant={"secondary"} />
				<Button onClick={defaultOnClick} buttonType="link" label={"Button Disabled"} disabled variant={"primary"} />
			</div>
			<div className="d-flex gap1">
				<Button
					onClick={defaultOnClick}
					buttonType="button"
					label={"Left Icon"}
					variant={"primary"}
					iconPosition="left"
					iconComp={() => <i className="ph-fill ph-heart"></i>}
				/>
				<Button
					onClick={defaultOnClick}
					buttonType="button"
					label={"Right Icon"}
					variant={"tertiary"}
					iconPosition="right"
					iconComp={() => <i className="ph-fill ph-heart"></i>}
				/>
				<Button
					onClick={defaultOnClick}
					buttonType="button"
					label={"Icon Both Sides"}
					variant={"secondary"}
					iconPosition="both"
					iconComp={() => <i className="ph-fill ph-heart"></i>}
				/>
			</div>
		</Section>
	);
};

export default ButtonSection;
