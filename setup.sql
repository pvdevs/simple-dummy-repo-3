-- Create the 'people' table if it doesn't exist
CREATE TABLE IF NOT EXISTS people (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Insert sample data into the 'people' table
INSERT INTO people (name) VALUES 
('Alice'), 
('Bob'), 
('Charlie'), 
('Diana'), 
('Eve')
ON CONFLICT DO NOTHING;
