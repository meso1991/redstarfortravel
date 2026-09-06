CREATE TABLE IF NOT EXISTS visa_orders (
    order_id TEXT PRIMARY KEY,
    created_at TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT NOT NULL,
    destination TEXT NOT NULL,
    nationality TEXT NOT NULL,
    service TEXT NOT NULL,
    birth_year TEXT,
    notes TEXT,
    language TEXT,
    passport_key TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_visa_orders_expires_at ON visa_orders (expires_at);