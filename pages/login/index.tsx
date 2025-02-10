import LoginForm from "@/components/Features/Authentication/LoginForm";
import React from "react";
import styled from "styled-components";

const LoginPage = () => {
	return (
		<PageContainer>
			<LoginForm />
		</PageContainer>
	);
};

const PageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	overflow: hidden;
	height: 90vh;
	height: 90dvh;
`;

export default LoginPage;
