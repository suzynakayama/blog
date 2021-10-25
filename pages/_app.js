import "../styles/globals.css";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/globalStyles";
import styled from "styled-components";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Main>
				<Component {...pageProps} />
			</Main>
		</>
	);
};

export default MyApp;

const Main = styled.main`
	max-width: 768px;
	margin: auto;
	overflow: auto;
	padding: 0 10px;
`;
