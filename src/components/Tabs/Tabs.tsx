import React from "react";
import { ITabGroup } from "../../models/ITabGroup";
import styles from "./Tabs.module.css";

const Tabs: React.FC<ITabGroup> = (props: ITabGroup) => {
	const [value, setValue] = React.useState<string | undefined>(props.value);
	const handleChange = (event: React.MouseEvent<HTMLDivElement>) => {
		const node = event.target as HTMLButtonElement;
		if (node.tagName === "BUTTON" && node.value !== value) {
			props.onChange(event, node.value);
			setValue(node.value);
		}
	};

	return (
		<div
			onClick={handleChange}
			className={`${styles.tabs} ${styles["tab_" + props.type]} ${styles["size_" + props.size]} ${props.className} ${
				props.fullwidth ? styles.fullwidth : ""
			}`}
			ref={props.ref}
		>
			{React.Children.map(props.children, (child: any) => {
				return React.cloneElement(child, { ...child.props, activeTab: value });
			})}
		</div>
	);
};

Tabs.displayName = "Tabs";
export default Tabs;
