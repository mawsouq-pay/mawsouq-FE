import {
	Html,
	Head,
	Preview,
	Body,
	Container,
	Text,
	Section,
	Heading,
	Hr,
	Button,
} from "@react-email/components";
import React from "react";

interface SellerPaidNotificationEmailProps {
	sellerName: string;
	buyerName: string;
	productTitle: string;
	price: number;
	deliveryDate: string;
	orderId: string;
	orderLink: string;
}

const SellerPaidNotificationEmail = ({
	sellerName,
	buyerName,
	productTitle,
	price,
	deliveryDate,
	orderId,
	orderLink,
}: SellerPaidNotificationEmailProps) => {
	return (
		<Html>
			<Head />
			<Preview>🎉 {buyerName} has paid for the order!</Preview>
			<Body style={main}>
				<Container style={container}>
					<Heading as="h2" style={heading}>
						🎉 Order Payment Received!
					</Heading>

					<Text style={paragraph}>
						Hello <strong>{sellerName}</strong>,
					</Text>

					<Text style={paragraph}>
						Great news! <strong>{buyerName}</strong> has successfully paid for
						the order. You're now expected to prepare and deliver the product.
					</Text>

					<Section style={detailsSection}>
						<Heading as="h3" style={subHeading}>
							📦 Order Details
						</Heading>

						<Text>
							<strong>Order ID:</strong> {orderId}
						</Text>
						<Text>
							<strong>Product:</strong> {productTitle}
						</Text>
						<Text>
							<strong>Price:</strong> {price} EGP
						</Text>
						<Text>
							<strong>Delivery Date:</strong> {deliveryDate}
						</Text>
					</Section>

					<Text style={paragraph}>
						Once the product is out for delivery, don't forget to update the
						order status.
					</Text>

					<Section style={{ textAlign: "center", marginTop: "30px" }}>
						<Button href={orderLink} style={button}>
							🔎 View Order
						</Button>
					</Section>

					<Text style={footerText}>
						Thank you for using <strong>Mawsouq</strong> – the trusted way to
						buy & sell safely.
					</Text>
				</Container>
			</Body>
		</Html>
	);
};

export default SellerPaidNotificationEmail;

const main = {
	fontFamily: "Arial, sans-serif",
	backgroundColor: "#f7f7f7",
	padding: "24px",
};

const container = {
	maxWidth: "600px",
	margin: "0 auto",
	backgroundColor: "#fff",
	padding: "24px",
	borderRadius: "8px",
};

const heading = {
	color: "#01796f",
	marginBottom: "10px",
};

const subHeading = {
	color: "#01796f",
	marginBottom: "12px",
};

const paragraph = {
	fontSize: "15px",
	margin: "10px 0",
};

const detailsSection = {
	margin: "24px 0",
	padding: "16px 0",
	borderTop: "1px dashed #ccc",
	borderBottom: "1px dashed #ccc",
};

const button = {
	display: "inline-block",
	backgroundColor: "#01796f",
	color: "#fff",
	padding: "12px 24px",
	borderRadius: "6px",
	textDecoration: "none",
	fontWeight: 600,
	fontSize: "16px",
};

const footerText = {
	fontSize: "13px",
	marginTop: "40px",
	color: "#888",
};
