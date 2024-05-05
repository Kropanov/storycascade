DROP TABLE IF EXISTS comments;

CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    content VARCHAR(1200) NOT NULL,
    user_id int NOT NULL REFERENCES users(id),
    novels_id int NOT NULL REFERENCES novels(id),
    parent_comment_id int REFERENCES comments(id),
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
    BEFORE UPDATE ON comments
    FOR EACH ROW
    EXECUTE FUNCTION update_timestamp();