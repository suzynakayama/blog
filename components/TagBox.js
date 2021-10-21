import React from "react";
import Tag from "./Tag";

const TagBox = ({ tags }) => {
	return (
		<div className="tag-box">
			{tags.forEach(tag => (
				<Tag tag={tag} key={tag.name} />
			))}
		</div>
	);
};

export default TagBox;
