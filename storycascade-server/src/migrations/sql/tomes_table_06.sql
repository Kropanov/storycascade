DROP TABLE IF EXISTS tomes;

CREATE TABLE IF NOT EXISTS tomes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    novel_id INT REFERENCES novels(id)
);