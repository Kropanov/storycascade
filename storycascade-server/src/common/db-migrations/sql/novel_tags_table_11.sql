DROP TABLE IF EXISTS novel_tags;

CREATE TABLE IF NOT EXISTS novel_tags (
    id SERIAL PRIMARY KEY,
    novel_id INT,
    tag_id INT,
    FOREIGN KEY (novel_id) REFERENCES novels(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
);