import React from "react";
import styled from "styled-components";
import RegisterForm from "@/components/RegisterForm";

const RegisterPage = () => {
	return (
		<PageContainer>
			<RegisterForm />
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

export default RegisterPage;
