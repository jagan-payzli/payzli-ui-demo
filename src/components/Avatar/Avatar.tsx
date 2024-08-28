import React from "react";
import { IAvatar } from "../../models/IAvatar";
import styles from "./Avatar.module.css";

const Avatar: React.FC<IAvatar> = ({ src, image_hash, mime_type, src_text, style = {}, ...props }: IAvatar) => {
	const isError = false;
	let image = src;
	if (image_hash) {
		image = `${props.apiRoutePrefix}?hash=${image_hash}&mime_type=${mime_type}`;
	}

	if (props.size === "xs") {
		props.width = "1.5rem";
		props.height = "1.5rem";
		props.iconSize = "0.875rem";
		props.statusIconSize = "0.425rem";
	} else if (props.size === "sm") {
		props.width = "2rem";
		props.height = "2rem";
		props.iconSize = "1rem";
		props.statusIconSize = "0.575rem";
	} else if (props.size === "md") {
		props.width = "2.5rem";
		props.height = "2.5rem";
		props.iconSize = "1.25rem";
		props.statusIconSize = "0.625rem";
	} else if (props.size === "lg") {
		props.width = "3rem";
		props.height = "3rem";
		props.iconSize = "1.5rem";
		props.statusIconSize = "0.75rem";
	} else if (props.size === "xl") {
		props.width = "3.5rem";
		props.height = "3.5rem";
		props.iconSize = "1.75rem";
		props.statusIconSize = "0.875rem";
	} else if (props.size === "2xl") {
		props.width = "4rem";
		props.height = "4rem";
		props.iconSize = "2rem";
		props.statusIconSize = "1rem";
	}

	const getNameLetters = () => {
		let [f, l] = src_text.split(" ");
		let name = f?.[0] || "P";
		name = name + (l ? l[0] : f?.[1] || "");
		return name;
	};
	const getStatusIcon = () => {
		if (!props.statusIcon) {
			return null;
		} else if (props.statusIcon === "online") {
			return (
				<div
					style={{ width: props.statusIconSize || "0.875rem", height: props.statusIconSize || "0.875rem" }}
					className={styles.icon_online}
				></div>
			);
		} else if (props.statusIcon === "offline") {
			return (
				<div
					style={{ width: props.statusIconSize || "0.875rem", height: props.statusIconSize || "0.875rem" }}
					className={styles.icon_offline}
				></div>
			);
		} else if (props.statusIcon === "verified") {
			return <i className="ph-fill ph-seal-check color-verified"></i>;
		} else if (props.statusIcon === "company") {
			return <i className="ph-building-fill text-primary"></i>;
		} else if (props.statusIcon === "merchant") {
			return <i className="ph-shop-fill text-primary"></i>;
		} else if (props.statusIcon === "user") {
			return <i className="ph-person-fill text-primary"></i>;
		} else if (props.statusIcon === "admin") {
			return <i className="ph-shield-fill text-primary"></i>;
		} else if (props.statusIcon === "partner") {
			return <i className="ph-people-fill text-primary"></i>;
		} else {
			return props.statusIcon;
		}
	};

	if ((image_hash || src) && !isError) {
		return (
			<div onClick={props.onClick} className={`${styles.avatar_icon} ${props.parentClass || ""}`}>
				<img
					title={props.tooltip}
					src={image}
					loading="lazy"
					alt={`${props.alt || src_text || ""}`}
					{...props}
					style={{ width: props.width, height: props.height, ...style }}
					className={`${styles.profile_pic} ${props.className || ""}`}
					ref={props.ref}
					// onError={() => setIsError(true)}
				/>
				<div className={styles.avatar_status_icon} style={{ fontSize: props.statusIconSize || "0.875rem" }}>
					{getStatusIcon()}
				</div>
			</div>
		);
	}
	if (props.placeholderIcon || src_text === "undefined" || src_text === "null" || !src_text) {
		return (
			<div onClick={props.onClick} className={`${styles.avatar_icon} ${props.parentClass || ""}`}>
				<div
					title={props.tooltip}
					style={{
						height: props.height,
						width: props.width,
						minWidth: props.width,
						maxWidth: props.width
					}}
					className={`${styles.profile_pic} ${props.className || ""}`}
					ref={props.ref}
				>
					<i style={{ fontSize: props.iconSize }} className={`ph-bold ph-user ${props.className || ""}`}></i>
				</div>
				<div className={styles.avatar_status_icon} style={{ fontSize: props.statusIconSize || "0.875rem" }}>
					{getStatusIcon()}
				</div>
			</div>
		);
	}
	return (
		<div onClick={props.onClick} className={`${styles.avatar_icon} ${props.parentClass || ""}`}>
			<div
				title={props.tooltip}
				style={{
					height: props.height,
					width: props.width,
					minWidth: props.width,
					maxWidth: props.width
				}}
				className={`${styles.profile_pic} ${props.className || ""}`}
			>
				<div style={{ fontSize: props.iconSize }}>{getNameLetters()}</div>
			</div>
			<div className={styles.avatar_status_icon} style={{ fontSize: props.statusIconSize || "0.875rem" }}>
				{getStatusIcon()}
			</div>
		</div>
	);
};

export default Avatar;
