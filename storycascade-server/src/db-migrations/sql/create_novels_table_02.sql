DROP TABLE IF EXISTS novels;

CREATE TABLE IF NOT EXISTS novels (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    authors VARCHAR(100) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    country varchar(50),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE OR REPLACE FUNCTION update_timestamp()
    RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_timestamp
    BEFORE UPDATE ON novels
    FOR EACH ROW
    EXECUTE FUNCTION update_timestamp();