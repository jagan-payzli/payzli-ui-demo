import React from "react";
import Section from "../components/Section";
import { IconButton } from "payzli-ui";
import { defaultOnClick } from "../utils/functions";

const IconButtonSection = () => {
	return (
		<Section title={"# Icon Buttons"}>
			<div className="d-flex gap1">
				<IconButton onClick={defaultOnClick} buttonType="button" variant={"primary"}>
					<i className="ph-fill ph-seal-check"></i>
				</IconButton>
				<IconButton onClick={defaultOnClick} buttonType="button" variant={"secondary"}>
					<i className="ph-fill ph-seal-check"></i>
				</IconButton>
				<IconButton onClick={defaultOnClick} buttonType="button" variant={"tertiary"}>
					<i className="ph-fill ph-seal-check"></i>
				</IconButton>
				<IconButton onClick={defaultOnClick} buttonType="button" disabled variant={"primary"}>
					<i className="ph-fill ph-seal-check"></i>
				</IconButton>
				<IconButton onClick={defaultOnClick} buttonType="button" variant={"none"}>
					<i className="ph-fill ph-seal-check"></i>
				</IconButton>
			</div>
			<div className="d-flex gap1">
				<IconButton onClick={defaultOnClick} buttonType="text" variant={"primary"}>
					<i className="ph-fill ph-seal-check"></i>
				</IconButton>
				<IconButton onClick={defaultOnClick} buttonType="text" variant={"secondary"}>
					<i className="ph-fill ph-seal-check"></i>
				</IconButton>
				<IconButton onClick={defaultOnClick} buttonType="text" disabled variant={"primary"}>
					<i className="ph-fill ph-seal-check"></i>
				</IconButton>
				<IconButton onClick={defaultOnClick} buttonType="text" variant={"none"}>
					<i className="ph-fill ph-seal-check"></i>
				</IconButton>
			</div>
			{/* <div className="d-flex gap1">
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
				</div> */}
			{/* <div className="d-flex gap1">
					<Button onClick={defaultOnClick} buttonType="link" label={"Button Primary"} variant={"primary"} />
					<Button onClick={defaultOnClick} buttonType="link" label={"Button Secondary"} variant={"secondary"} />
					<Button onClick={defaultOnClick} buttonType="link" label={"Button Disabled"} disabled variant={"primary"} />
				</div> */}
			{/* <div className="d-flex gap1">
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
				</div> */}
		</Section>
	);
};

export default IconButtonSection;
