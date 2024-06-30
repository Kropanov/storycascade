DROP TABLE IF EXISTS novels;

CREATE TABLE IF NOT EXISTS novels (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL UNIQUE,
    other_titles VARCHAR(250),
    description VARCHAR(2000) NOT NULL,
    chapters INT NOT NULL,
    poster_id VARCHAR(100) NOT NULL, -- FIXME: poster_id => image_key
    state_id int NOT NULL REFERENCES states(id),
    country_id int NOT NULL REFERENCES countries(id),
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