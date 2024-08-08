import { Avatar, AvatarGroup } from "payzli-ui";
import Section from "../components/Section";

const AvatarGroupSection = () => {
	const onClickMore = (event: any) => {
		alert("Clicked on more items");
	};
	const onClickAddNew = (event: any) => {
		alert("Clicked on add new item");
	};
	const onClickAvatar = (event: any) => {
		alert("Clicked on avatar group");
	};

	return (
		<Section title={"# Avatar Group"}>
			<div className="d-flex align-items-center gap2">
				<AvatarGroup
					onClick={onClickAvatar}
					handleAddNew={onClickAddNew}
					handleClickMore={onClickMore}
					size="md"
					showAddIcon={true}
					plusIconHeight=""
					plusIconWidth=""
					plusIconSize=""
				>
					<Avatar size={"md"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
					<Avatar size={"md"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
					<Avatar size={"md"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
					<Avatar size={"md"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
					<Avatar size={"md"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
				</AvatarGroup>
			</div>
			<div className="d-flex align-items-center gap2">
				<AvatarGroup
					onClick={onClickAvatar}
					handleAddNew={onClickAddNew}
					handleClickMore={onClickMore}
					size="sm"
					showAddIcon={true}
					plusIconHeight=""
					plusIconWidth=""
					plusIconSize=""
				>
					<Avatar size={"sm"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
					<Avatar size={"sm"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
					<Avatar size={"sm"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
					<Avatar size={"sm"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
					<Avatar size={"sm"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
				</AvatarGroup>
			</div>
			<div className="d-flex align-items-center gap2">
				<AvatarGroup
					onClick={onClickAvatar}
					handleAddNew={onClickAddNew}
					handleClickMore={onClickMore}
					size="xl"
					showAddIcon={true}
					plusIconHeight=""
					plusIconWidth=""
					plusIconSize=""
				>
					<Avatar size={"xl"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
					<Avatar size={"xl"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
					<Avatar size={"xl"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
					<Avatar size={"xl"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
					<Avatar size={"xl"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
				</AvatarGroup>
			</div>
			<div className="d-flex align-items-center gap2">
				<AvatarGroup
					onClick={onClickAvatar}
					handleAddNew={onClickAddNew}
					handleClickMore={onClickMore}
					size="md"
					showAddIcon={true}
					plusIconHeight=""
					plusIconWidth=""
					plusIconSize=""
				>
					<Avatar
						size={"md"}
						src="https://lh3.googleusercontent.com/ogw/AF2bZyiblb3IWMhXzI86zV3P3aEr2qfPacKWrGT_PB1bDxCR=s64-c-mo"
						src_text={"Kapil Prashad"}
						id={""}
						image_hash={""}
						mime_type={""}
					/>
					<Avatar
						size={"md"}
						src="https://lh3.googleusercontent.com/ogw/AF2bZyiblb3IWMhXzI86zV3P3aEr2qfPacKWrGT_PB1bDxCR=s64-c-mo"
						src_text={"Kapil Prashad"}
						id={""}
						image_hash={""}
						mime_type={""}
					/>
					<Avatar
						size={"md"}
						src="https://lh3.googleusercontent.com/ogw/AF2bZyiblb3IWMhXzI86zV3P3aEr2qfPacKWrGT_PB1bDxCR=s64-c-mo"
						src_text={"Kapil Prashad"}
						id={""}
						image_hash={""}
						mime_type={""}
					/>
					<Avatar
						size={"md"}
						src="https://lh3.googleusercontent.com/ogw/AF2bZyiblb3IWMhXzI86zV3P3aEr2qfPacKWrGT_PB1bDxCR=s64-c-mo"
						src_text={"Kapil Prashad"}
						id={""}
						image_hash={""}
						mime_type={""}
					/>
					<Avatar
						size={"md"}
						src="https://lh3.googleusercontent.com/ogw/AF2bZyiblb3IWMhXzI86zV3P3aEr2qfPacKWrGT_PB1bDxCR=s64-c-mo"
						src_text={"Kapil Prashad"}
						id={""}
						image_hash={""}
						mime_type={""}
					/>
				</AvatarGroup>
			</div>
		</Section>
	);
};

export default AvatarGroupSection;
