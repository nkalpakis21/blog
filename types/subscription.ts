export interface Price {
    id: string /* primary key */;
    product_id?: string /* foreign key to products.id */;
    description?: string;
    unit_amount?: number;
    currency?: string;
    trial_period_days?: number | null;
}
export interface Subscription {
    id: string /* primary key */;
    user_id: string;
    status?: 'active' | 'disabled';
    metadata?: string;
    price_id?: string /* foreign key to prices.id */;
    quantity?: number;
    cancel_at_period_end?: boolean;
    created: string;
    current_period_start: string;
    current_period_end: string;
    ended_at?: string;
    cancel_at?: string;
    canceled_at?: string;
    trial_start?: string;
    trial_end?: string;
    price?: Price;
}
