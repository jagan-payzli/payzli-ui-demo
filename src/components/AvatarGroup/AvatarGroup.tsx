import React from "react";
import { IAvatarGroup } from "../../models/IAvatarGroup";
import Avatar from "../Avatar/Avatar";
import HideComponentWrapper from "../HideComponentWrapper";
import styles from "./AvatarGroup.module.css";

const AvatarGroup: React.FC<IAvatarGroup> = ({ children, ...props }: IAvatarGroup) => {
	const maxAvatar = props.max || 4;

	if (props.size === "xs") {
		props.plusIconWidth = "1.5rem";
		props.plusIconHeight = "1.5rem";
		props.plusIconSize = "0.875rem";
	} else if (props.size === "sm") {
		props.plusIconWidth = "2rem";
		props.plusIconHeight = "2rem";
		props.plusIconSize = "1rem";
	} else if (props.size === "md") {
		props.plusIconWidth = "2.5rem";
		props.plusIconHeight = "2.5rem";
		props.plusIconSize = "1.25rem";
	} else if (props.size === "lg") {
		props.plusIconWidth = "3rem";
		props.plusIconHeight = "3rem";
		props.plusIconSize = "1.5rem";
	} else if (props.size === "xl") {
		props.plusIconWidth = "3.5rem";
		props.plusIconHeight = "3.5rem";
		props.plusIconSize = "1.75rem";
	} else if (props.size === "2xl") {
		props.plusIconWidth = "4rem";
		props.plusIconHeight = "4rem";
		props.plusIconSize = "2rem";
	}

	return (
		<div ref={props.ref} className={styles.avatar_group_cont}>
			<HideComponentWrapper hidden={!children?.length}>
				<div onClick={props.onClick} className={`${styles.avatar_group}`}>
					{children.slice(0, maxAvatar).map((element: JSX.Element, index: number) => {
						return (
							<div key={index} className={styles.avatar_item_cont}>
								{element}
							</div>
						);
					})}
					{children.length > maxAvatar && (
						<div className={styles.avatar_item_cont}>
							<Avatar
								size={props.size}
								src_text={`+${children.length - maxAvatar}`}
								id={"avatar-more-number"}
								onClick={props.handleClickMore}
								image_hash={""}
								mime_type={""}
							/>
						</div>
					)}
				</div>
			</HideComponentWrapper>
			<HideComponentWrapper show={!!props.showAddIcon}>
				<div
					onClick={props.handleAddNew}
					className={styles.add_member_icon}
					style={{ height: props.plusIconHeight, width: props.plusIconWidth }}
				>
					<i style={{ fontSize: props.plusIconSize }} className="ph-bold ph-plus"></i>
				</div>
			</HideComponentWrapper>
		</div>
	);
};

export default AvatarGroup;
