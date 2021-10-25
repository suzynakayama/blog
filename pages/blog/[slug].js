import fs from "fs";
import path from "path";
import matter from "gray-matter";
import md from "../../utils/remarkable";
import Image from "next/image";
import styled from "styled-components";
import { ArticleDate } from "../../components/Article";
import ScrollUpButton from "react-scroll-up-button";

const ArticlePage = ({
	metadata: { title, date, thumbnail },
	slug,
	content,
}) => {
	let theContent = md.render(content);

	return (
		<div>
			<ArticleTitle>{title}</ArticleTitle>
			<ArticleDate>Posted on {date}</ArticleDate>
			<ArticleImg>
				<Image src={thumbnail} alt="" layout="fill" />
			</ArticleImg>
			<ArticleBody>
				<div dangerouslySetInnerHTML={{ __html: theContent }}></div>
			</ArticleBody>
			<ScrollUpButton />
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

const ArticleImg = styled.div`
	position: relative;
	height: 450px;
`;

const ArticleTitle = styled.h1`
	margin: 10px 0;
`;

const ArticleBody = styled.div`
	& ul {
		line-height: 2.3;
		margin-left: 15px;
	}
	& ol {
		line-height: 2.3;
		margin-left: 15px;
	}
	& pre {
		background: #f4f4f4;
		padding: 20px;
		margin: 20px 0;
		line-height: 2.3;
	}
`;
