export interface Order {
    buyer?: string | null;
    seller?: string | null;
    title: string;
    itemName: string;
    price: number;
    description: string;
    otherPartyEmail?: string | null;
    otherPartyNumber?: string | null;
    isFetcherSeller: boolean;
}

export interface FetchOrdersResponse {
    message: string;
    orders?: Order[];
}
