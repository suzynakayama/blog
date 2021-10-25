import Link from "next/link";
import styled from "styled-components";
import { Container } from "../styles/globalStyles";

export const Header = () => {
	return (
		<TheHeader>
			<HeaderContainer>
				<Link href="/">
					<HeaderLink>Main</HeaderLink>
				</Link>
				<Link href="/about">
					<HeaderLink>About Me</HeaderLink>
				</Link>
				<Link href="https://www.suzynakayama.com">
					<HeaderLink target="_blank">Portfolio</HeaderLink>
				</Link>
			</HeaderContainer>
		</TheHeader>
	);
};

const TheHeader = styled(Container)`
	max-width: unset;
	background: rgb(34, 111, 226);
	color: #fff;
	padding: 15px;
	margin-bottom: 40px;
	height: 50px;
`;

const HeaderLink = styled.a`
	color: #fff;
	font-size: 20px;
	font-weight: 600;
`;

const HeaderContainer = styled.div`
	height: 50px;
	margin-right: 20px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 50px;
	transform: translateY(-15px);
`;
