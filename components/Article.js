import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const Article = ({ article }) => {
	return (
		<Link href={`/blog/${article.slug}`}>
			<ArticleLink>
				<ArticleCard>
					<ArticleThumbnail>
						<Image
							src={article.metadata.thumbnail}
							alt=""
							layout="fill"
						/>
					</ArticleThumbnail>
					<ArticleDateContainer>
						<ArticleDate>
							Posted on {article.metadata.date}
						</ArticleDate>
					</ArticleDateContainer>
					<h3>{article.metadata.title}</h3>
					<ArticleDescriptionContainer>
						<ArticleDescription>
							{article.metadata.description}
						</ArticleDescription>
					</ArticleDescriptionContainer>
				</ArticleCard>
			</ArticleLink>
		</Link>
	);
};

const ArticleLink = styled.a`
	color: #333;
	cursor: pointer;
	transition: all 0.5s;
	&:hover {
		transform: scale(1.02);
	}
`;

const ArticleCard = styled.div`
	padding: 15px;
	border-radius: 10px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
`;

const ArticleThumbnail = styled.div`
	position: relative;
	height: 200px;
`;

const ArticleDateContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const ArticleDate = styled.p`
	margin-top: 10px;
	margin-bottom: 20px;
`;

const ArticleDescriptionContainer = styled.div`
	flex-grow: 1;
`;

const ArticleDescription = styled.p`
	font-weight: 300;
	font-style: italic;
`;
