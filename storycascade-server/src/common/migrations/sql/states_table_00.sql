DROP TABLE IF EXISTS states;

CREATE TABLE IF NOT EXISTS states (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL UNIQUE,
    description VARCHAR(300) NOT NULL
);

INSERT INTO states (name, description) VALUES
('Active', 'The novella is currently being written, edited, or developed. The author is actively working on it.'),
('Completed', 'The novella has been fully written and is ready for publication or submission for editing.'),
('Abandoned', 'The author has ceased work on the novella without completion. This could happen for various reasons, such as loss of interest, change of plans, or lack of time.'),
('Revision', 'The novella requires significant revision or rewriting. Changes to the plot, characters, or style may be necessary.'),
('On Hold', 'Work on the novella has been temporarily suspended for some reason, but the author plans to return to it in the future.');
