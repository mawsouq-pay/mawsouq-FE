import { OrderStatusEnum } from "@/constants";

export interface StatusEntry {
	status: (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum];
	timestamp: string; // "2025-01-01T00:00:00.000Z"
}
export interface HistoryProps {
	statusHistory?: StatusEntry[];
}
