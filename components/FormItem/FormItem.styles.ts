import styled from "styled-components";

export const FormItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: 100%;
	margin-top: 20px;
`;

export const Label = styled.label`
	font-size: 14px;
	font-weight: 600;
	color: #75859e;
`;

export const StyledInput = styled.input`
	width: 100%;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 6px;
	font-size: 14px;
	background-color: #f7f7f7;
	outline: none;
	transition: border 0.3s ease;

	&:focus {
		border-color: #31c48d;
		background-color: white;
		border-width: 2px;
	}
`;

export const ErrorText = styled.span`
	font-size: 12px;
	color: red;
	margin-top: 4px;
`;

export const IconContainer = styled.span<{ position: "left" | "right" }>`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	${(props) => (props.position === "right" ? "right: 10px;" : "left: 10px;")}
	cursor: pointer;
	display: flex;
	align-items: center;
`;
