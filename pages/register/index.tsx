import React from "react";
import { PageContainer } from "./Register.style";

import { useLocaleStore } from "@/store/LocaleStore";
import RegisterForm from "@/components/RegisterForm";

const Register = () => {
	return (
		<PageContainer>
			<RegisterForm />
		</PageContainer>
	);
};

export default Register;
