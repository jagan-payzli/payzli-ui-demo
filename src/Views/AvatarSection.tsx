import { Avatar } from "../components";
import Section from "../components/Section";

const AvatarSection = () => {
	return (
		<Section title={"# Avatar"}>
			<div className="d-flex align-items-center gap2">
				<Avatar size={"xs"} user_type="merchant" src_text={""} id={""} image_hash={""} mime_type={""} height={"24px"} width={"24px"} />
				<Avatar size={"sm"} user_type="merchant" src_text={""} id={""} image_hash={""} mime_type={""} height={"24px"} width={"24px"} />
				<Avatar size={"md"} user_type="merchant" src_text={""} id={""} image_hash={""} mime_type={""} height={"24px"} width={"24px"} />
				<Avatar size={"lg"} user_type="merchant" src_text={""} id={""} image_hash={""} mime_type={""} height={"24px"} width={"24px"} />
				<Avatar size={"xl"} user_type="merchant" src_text={""} id={""} image_hash={""} mime_type={""} height={"24px"} width={"24px"} />
				<Avatar
					statusIcon={<i className="ph-fill ph-seal-check"></i>}
					size={"2xl"}
					user_type="merchant"
					src_text={""}
					id={""}
					image_hash={""}
					mime_type={""}
					height={"24px"}
					width={"24px"}
				/>
			</div>
			<div className="d-flex align-items-center gap2">
				<Avatar
					statusIcon={"verified"}
					size={"xs"}
					user_type="merchant"
					src_text={""}
					id={""}
					image_hash={""}
					mime_type={""}
					height={"24px"}
					width={"24px"}
				/>
				<Avatar
					statusIcon={"verified"}
					size={"sm"}
					user_type="merchant"
					src_text={""}
					id={""}
					image_hash={""}
					mime_type={""}
					height={"24px"}
					width={"24px"}
				/>
				<Avatar
					statusIcon={"verified"}
					size={"md"}
					user_type="merchant"
					src_text={""}
					id={""}
					image_hash={""}
					mime_type={""}
					height={"24px"}
					width={"24px"}
				/>
				<Avatar
					statusIcon={"online"}
					size={"lg"}
					user_type="merchant"
					src_text={""}
					id={""}
					image_hash={""}
					mime_type={""}
					height={"24px"}
					width={"24px"}
				/>
				<Avatar
					statusIcon={"offline"}
					size={"xl"}
					user_type="user"
					src_text={""}
					id={""}
					image_hash={""}
					mime_type={""}
					height={"24px"}
					width={"24px"}
				/>
				<Avatar
					statusIcon={"verified"}
					size={"2xl"}
					user_type="merchant"
					src_text={""}
					id={""}
					image_hash={""}
					mime_type={""}
					height={"24px"}
					width={"24px"}
				/>
			</div>
			<div className="d-flex align-items-center gap2">
				<Avatar size={"xs"} src_text={"Jagan Swarnkar"} id={""} image_hash={""} mime_type={""} />
				<Avatar size={"sm"} src_text={"Jagan Swarnkar"} id={""} image_hash={""} mime_type={""} />
				<Avatar size={"md"} src_text={"Jagan Swarnkar"} id={""} image_hash={""} mime_type={""} />
				<Avatar size={"lg"} src_text={"Jagan Swarnkar"} id={""} image_hash={""} mime_type={""} />
				<Avatar size={"xl"} src_text={"Jagan Swarnkar"} id={""} image_hash={""} mime_type={""} />
				<Avatar
					statusIcon={<i className="ph-fill ph-seal-check"></i>}
					size={"2xl"}
					src_text={"Jagan Swarnkar"}
					id={""}
					image_hash={""}
					mime_type={""}
				/>
			</div>
			<div className="d-flex align-items-center gap2">
				<Avatar
					src="https://lh3.googleusercontent.com/ogw/AF2bZyiblb3IWMhXzI86zV3P3aEr2qfPacKWrGT_PB1bDxCR=s64-c-mo"
					size={"xs"}
					src_text={"Jagan Swarnkar"}
					id={""}
					image_hash={""}
					mime_type={""}
				/>
				<Avatar
					src="https://lh3.googleusercontent.com/ogw/AF2bZyiblb3IWMhXzI86zV3P3aEr2qfPacKWrGT_PB1bDxCR=s64-c-mo"
					size={"sm"}
					src_text={"Jagan Swarnkar"}
					id={""}
					image_hash={""}
					mime_type={""}
				/>
				<Avatar
					src="https://lh3.googleusercontent.com/ogw/AF2bZyiblb3IWMhXzI86zV3P3aEr2qfPacKWrGT_PB1bDxCR=s64-c-mo"
					size={"md"}
					src_text={"Jagan Swarnkar"}
					id={""}
					image_hash={""}
					mime_type={""}
				/>
				<Avatar
					src="https://lh3.googleusercontent.com/ogw/AF2bZyiblb3IWMhXzI86zV3P3aEr2qfPacKWrGT_PB1bDxCR=s64-c-mo"
					size={"lg"}
					src_text={"Jagan Swarnkar"}
					id={""}
					image_hash={""}
					mime_type={""}
				/>
				<Avatar
					src="https://lh3.googleusercontent.com/ogw/AF2bZyiblb3IWMhXzI86zV3P3aEr2qfPacKWrGT_PB1bDxCR=s64-c-mo"
					size={"xl"}
					src_text={"Jagan Swarnkar"}
					id={""}
					image_hash={""}
					mime_type={""}
				/>
				<Avatar
					src="https://lh3.googleusercontent.com/ogw/AF2bZyiblb3IWMhXzI86zV3P3aEr2qfPacKWrGT_PB1bDxCR=s64-c-mo"
					size={"2xl"}
					src_text={"Jagan Swarnkar"}
					id={""}
					image_hash={""}
					mime_type={""}
					statusIcon={<i className="ph-fill ph-seal-check"></i>}
				/>
			</div>
		</Section>
	);
};

export default AvatarSection;
