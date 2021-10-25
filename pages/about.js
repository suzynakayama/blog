import styled from "styled-components";
import { Container } from "../styles/globalStyles";

const about = () => {
	return (
		<About>
			<h2>About Me</h2>
			<AboutImg
				className="about-img"
				src="/images/suzy.jpg"
				alt="Suzy Picture"
			/>
			<p>
				Hi, I'm Suzy Nakayama and I graduated from General Assembly{" "}
				<strong>Software Engineering Immersive</strong> program. I am a
				full-stack developer that translates the geekiness behind ideas
				bringing to life an aesthetically pleasing and fluid app for
				users.
			</p>
			<p>
				My background in intellectual property law and culinary arts
				enhanced my ability to articulate in a business context and to
				provide creative solutions. This allows me to be an organized
				and focused team player that collaborates for a positive
				environment seeking challenges and opportunities to grow and
				improve, while also developing and delivering.
			</p>
			<p>
				I created this blog as a way to share my learning and
				experiences as a software developer.
			</p>
			<AboutPhrase>
				Learning is my hobby and creating is my passion.
			</AboutPhrase>
		</About>
	);
};

export default about;

const About = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const AboutImg = styled.img`
	border-radius: 48%;
	height: 300px;
	width: 245px;
	margin: 30px;
	border-style: double;
	border-width: 2px;
	border-color: #000;
`;

const AboutPhrase = styled.p`
	font-weight: 300;
	font-style: italic;
`;
