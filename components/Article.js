import Link from "next/Link";
import Image from "next/image";

export const Article = ({ article }) => {
	return (
		<Link href={`/blog/${article.slug}`}>
			<a className="article-card-link">
				<div className="card">
					<div className="article-thumbnail">
						<Image
							src={article.metadata.thumbnail}
							alt=""
							layout="fill"
						/>
					</div>
					<div className="article-date-container">
						<p className="article-date">
							Posted on {article.metadata.date}
						</p>
					</div>
					<h3>{article.metadata.title}</h3>
					<div className="article-description-container">
						<p className="article-description">
							{article.metadata.description}
						</p>
					</div>
				</div>
			</a>
		</Link>
	);
};