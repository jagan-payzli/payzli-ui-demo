import { CreditCard } from "@phosphor-icons/react";
import React from "react";
import { MaskInput } from "../../components";
import { ICardInputProps } from "../../models";
import styles from "./InputField.module.css";

const CardInput: React.FC<ICardInputProps> = (props: ICardInputProps) => {
	const { ...otherProps } = props;

	return (
		<MaskInput
			type={"number"}
			{...otherProps}
			formClass={styles.card_input_cont}
			sectionType="left"
			inputMode="numeric"
			sectionLeftIcon={<div className={styles.card_input_icon}>{props.cardIcon || <CreditCard className="icon-color" />}</div>}
		/>
	);
};

CardInput.displayName = "CardInput";
export default CardInput;
