import React from "react";
import styles from "./Card.module.css";
import { ICardProps } from "../../models/ICard";

const Card: React.FC<ICardProps> = (props: ICardProps) => {
	return (
		<div ref={props.ref} className={`${styles.card_container} ${styles[props.size]} ${props.className ?? ""}`}>
			{props.children}
		</div>
	);
};

Card.displayName = "Card";
export default Card;
