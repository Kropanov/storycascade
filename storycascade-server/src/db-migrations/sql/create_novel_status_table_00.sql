DROP TABLE IF EXISTS novel_status;

CREATE TABLE IF NOT EXISTS novel_status (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL UNIQUE,
    description VARCHAR(300) NOT NULL
);