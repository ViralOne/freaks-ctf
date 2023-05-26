-- Create table
CREATE TABLE users (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL
);

-- Insert sample user data
INSERT INTO users (username, password, email)
VALUES ('user1', 'password1', 'user1@example.com'),
       ('user2', 'password2', 'user2@example.com'),
       ('user3', 'password3', 'user3@example.com');
