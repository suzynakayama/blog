import Link from "next/link";

export const Header = () => {
	return (
		<header>
			<div className="container">
				<Link href="/">
					<a>Main</a>
				</Link>
				<Link href="/about">
					<a>About Me</a>
				</Link>
				<Link href="https://www.suzynakayama.com">
					<a target="_blank">Portfolio</a>
				</Link>
			</div>
		</header>
	);
};
