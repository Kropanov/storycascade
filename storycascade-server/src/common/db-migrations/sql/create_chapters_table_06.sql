DROP TABLE IF EXISTS chapters;

CREATE TABLE IF NOT EXISTS chapters (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    likes INT DEFAULT 0,
    tomes_id INT REFERENCES tomes(id)
);