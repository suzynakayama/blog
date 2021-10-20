import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Article } from "../components/Article";
import { sortByDate } from "../utils";

export default function Home({ articles }) {
	return (
		<div>
			<Head>
				<title>Suzy's Blog</title>
			</Head>

			<div className="posts">
				{articles.map((article, idx) => (
					<Article key={idx} article={article} />
				))}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const files = fs.readdirSync(path.join("articles"));

	const articles = files.map(filename => {
		const slug = filename.replace(".md", "");
		const textWithMetadata = fs.readFileSync(
			path.join("articles", filename),
			"utf-8"
		);
		const { data: metadata } = matter(textWithMetadata);
		return { slug, metadata };
	});

	return {
		props: {
			articles: articles.sort(sortByDate),
		},
	};
}
