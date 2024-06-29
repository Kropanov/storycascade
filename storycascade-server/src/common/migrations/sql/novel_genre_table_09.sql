DROP TABLE IF EXISTS novel_genre;

CREATE TABLE IF NOT EXISTS novel_genre (
    id SERIAL PRIMARY KEY,
    novel_id INT,
    genre_id INT,
    FOREIGN KEY (novel_id) REFERENCES novels(id),
    FOREIGN KEY (genre_id) REFERENCES genres(id)
);