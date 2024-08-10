import React, { createContext, useEffect } from "react";
import styles from "./Tabs.module.css";
interface ITabs {
	children: React.ReactNode;
	onChange: (event: React.MouseEvent<HTMLDivElement>, newValue: any) => void;
	value: any;
	className?: string;
	type: "primary" | "secondary" | "tertiary" | "underline" | "underline-primary";
	size: "sm" | "md" | "lg";
}

const Tabs = (props: ITabs) => {
	const [value, setValue] = React.useState<string | undefined>(props.value);
	const handleChange = (event: React.MouseEvent<HTMLDivElement>) => {
		const node = event.target as HTMLButtonElement;
		if (node.tagName === "BUTTON" && node.value !== value) {
			props.onChange(event, node.value);
			setValue(node.value);
		}
	};

	return (
		<div onClick={handleChange} className={`${styles.tabs} ${styles["tab_" + props.type]} ${styles["size_" + props.size]} ${props.className}`}>
			{React.Children.map(props.children, (child: any) => {
				return React.cloneElement(child, { ...child.props, activeTab: value });
			})}
		</div>
	);
};

export default Tabs;
