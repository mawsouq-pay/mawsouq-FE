import React from "react";
import styled from "styled-components";
import RegisterForm from "@/components/Features/Authentication/RegisterForm";
import { useRouter } from "next/router";

const RegisterPage = () => {
	const router = useRouter();
	const orderId = router.query.orderId;
	return (
		<PageContainer>
			<RegisterForm orderId={(orderId as string) ?? undefined} />
		</PageContainer>
	);
};

const PageContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export default RegisterPage;
