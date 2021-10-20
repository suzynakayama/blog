const about = () => {
	return (
		<div className="container about">
			<h2>About Me</h2>
			<img
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
			<p className="about-phrase">
				Learning is my hobby and creating is my passion.
			</p>
		</div>
	);
};

export default about;
