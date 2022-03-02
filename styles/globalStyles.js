import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Nunito", sans-serif;
    }

    p {
        margin: 15px 0;
        line-height: 1.8;
    }

    a {
        text-decoration: none;
        color: rgb(34, 111, 226);
        cursor: pointer;
    }

    img {
        width: 100%;
        border-radius: 10px;
    }
`;

export const Container = styled.div`
	max-width: 768px;
	margin: auto;
	overflow: auto;
	padding: 0 10px;
`;

export const Btn = styled.button`
	display: inline-block;
	background: #f4f4f4;
	color: #000;
	border: none;
	padding: 8px 16px;
	border-radius: 15px;
	cursor: pointer;
	text-decoration: none;
	font-size: 15px;
	font-family: inherit;
	&:focus {
		outline: none;
	}
	&:hover {
		transform: scale(0.98);
	}
`;

export const Articles = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	margin-top: 30px;
	margin-bottom: 30px;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`;
