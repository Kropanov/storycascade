DROP TABLE IF EXISTS ratings;

CREATE TABLE IF NOT EXISTS ratings (
     id SERIAL PRIMARY KEY,
     novel_id INT NOT NULL,
     rating INT NOT NULL,
     voter_count INT NOT NULL,
     FOREIGN KEY (novel_id) REFERENCES novels(id)
);
