import fs from "fs";
import path from "path";
import matter from "gray-matter";
import md from "../../utils/remarkable";
import Image from "next/image";

const ArticlePage = ({
	metadata: { title, date, thumbnail },
	slug,
	content,
}) => {
	let theContent = md.render(content);
	return (
		<div>
			<h1 className="article-title">{title}</h1>
			<div className="article-date">Posted on {date}</div>
			<div className="article-img">
				<Image src={thumbnail} alt="" layout="fill" />
			</div>
			<div className="article-body">
				<div dangerouslySetInnerHTML={{ __html: theContent }}></div>
			</div>
		</div>
	);
};

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("articles"));

	const paths = files.map(filename => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}));

	return {
		paths,
		fallback: false, // if try to open unknown page it will return a 404
	};
}

export async function getStaticProps({ params: { slug } }) {
	const textWithMetadata = fs.readFileSync(
		path.join("articles", slug + ".md"),
		"utf-8"
	);
	const { data: metadata, content } = matter(textWithMetadata);

	return {
		props: {
			metadata,
			slug,
			content,
		},
	};
}

export default ArticlePage;
