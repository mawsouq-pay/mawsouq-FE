import React from "react";
import {
	Html,
	Head,
	Body,
	Container,
	Text,
	Section,
	Row,
	Column,
	Button,
	Link,
} from "@react-email/components";

interface ConfirmOrderEmailProps {
	transactionTitle: string;
	itemName: string;
	description: string;
	price: string;
	deliveryDate: Date;
	quantity: string;
	otherPartyEmail: string;
	otherPartyPhone: string;
	total: number;
	escrowFee: number;
	senderEmail: string;
	confirmUrl: string;
}

const ConfirmOrderEmail: React.FC<ConfirmOrderEmailProps> = ({
	transactionTitle,
	itemName,
	description,
	price,
	escrowFee,
	total,
	deliveryDate,
	otherPartyEmail,
	senderEmail,
	otherPartyPhone,
	confirmUrl,
}) => {
	return (
		<Html>
			<Head />
			<Body
				style={{
					fontFamily: "Arial, sans-serif",
					color: "#333",
					lineHeight: "1.6",
				}}
			>
				<Container
					style={{
						maxWidth: "600px",
						margin: "0 auto",
						padding: "20px",
						backgroundColor: "#f7f8fa",
						borderRadius: "8px",
					}}
				>
					<Section style={{ textAlign: "center", marginBottom: "20px" }}>
						<Text style={{ fontSize: "20px", fontWeight: "bold" }}>
							Order Confirmation
						</Text>
					</Section>

					<Section style={{ marginBottom: "20px" }}>
						<Text>
							An order has been created by <strong>{senderEmail}</strong> to{" "}
							<strong>{otherPartyEmail}</strong> with a total cost of{" "}
							<strong>{total}</strong>.
						</Text>
					</Section>

					<Section
						style={{
							backgroundColor: "#fff",
							padding: "15px",
							borderRadius: "8px",
							boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
							marginBottom: "20px",
						}}
					>
						<Text
							style={{
								fontSize: "16px",
								fontWeight: "bold",
								marginBottom: "10px",
							}}
						>
							Order Details:
						</Text>
						<Text>
							<strong>Transaction Title:</strong> {transactionTitle}
						</Text>
						<Text>
							<strong>Item Name:</strong> {itemName}
						</Text>
						<Text>
							<strong>Description:</strong> {description}
						</Text>
					</Section>

					<Section
						style={{
							backgroundColor: "#fff",
							padding: "15px",
							borderRadius: "8px",
							boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
							marginBottom: "20px",
						}}
					>
						<Row>
							<Column>
								<Text style={{ fontWeight: "bold" }}>Price:</Text>
							</Column>
							<Column style={{ textAlign: "right" }}>
								<Text>{price}</Text>
							</Column>
						</Row>
						<Row>
							<Column>
								<Text style={{ fontWeight: "bold" }}>Escrow Fee:</Text>
							</Column>
							<Column style={{ textAlign: "right" }}>
								<Text>{escrowFee}</Text>
							</Column>
						</Row>
						<Row>
							<Column>
								<Text style={{ fontWeight: "bold" }}>Total:</Text>
							</Column>
							<Column style={{ textAlign: "right" }}>
								<Text>{total}</Text>
							</Column>
						</Row>
						<Row>
							<Column>
								<Text style={{ fontWeight: "bold" }}>Delivery Date:</Text>
							</Column>
							<Column style={{ textAlign: "right" }}>
								<Text>{deliveryDate.toISOString()}</Text>
							</Column>
						</Row>
					</Section>

					<Section style={{ textAlign: "center", marginBottom: "20px" }}>
						<Button
							href={confirmUrl}
							style={{
								backgroundColor: "#28a745",
								color: "#fff",
								padding: "10px 20px",
								borderRadius: "5px",
								textDecoration: "none",
								fontWeight: "bold",
								display: "inline-block",
							}}
						>
							Confirm Order
						</Button>
					</Section>

					<Section
						style={{ textAlign: "center", fontSize: "12px", color: "#777" }}
					>
						<Text>
							If you did not create this order, please ignore this email.
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default ConfirmOrderEmail;
