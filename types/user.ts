export interface User {
    id: string /* primary key */;
    email: string;
    first_name: string;
    last_name: string;
    billing_address?: string;
    payment_method?: string;

    subscription?: boolean;
}