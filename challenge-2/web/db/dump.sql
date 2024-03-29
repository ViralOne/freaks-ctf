-- Create table
CREATE TABLE users (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  status VARCHAR(100) NOT NULL
);

-- Insert sample user data
INSERT INTO users (username, password, status)
VALUES ('johndoe', 'passw0rd123', 'Out of office - taking a well-deserved break'),
       ('janedoe', 'pasS123word', 'Currently on vacation, exploring new horizon'),
       ('admin', 'f4k3Freak', 'There is no status available at this time'),
       ('justjohn', 'SecurePass', 'Taking a quick power nap'),
       ('sarahjones', 'Password!23', 'Engrossed in deep work mode, creating something amazing'),
       ('alexwilson', 'alexpass123', 'Busy brainstorming and ideatin'),
       ('emilybrown', 'Password456', 'On a call'),
       ('miketh', 'MyimposiblePassw0rd41', 'Looking into a strange encoded doc on this IP:PORT/LeakedDoc.txt'),
       ('davidlee', 'pass987word', 'In research mode'),
       ('amynguyen', 'password!@#', 'In a state of flow, do not disturb'),
       ('peteradams', 'p@ssw0rD', 'Taking a coffee break '),
       ('laurasmith', 'password789', 'Diving into data and crunching number'),
       ('modchat', 'M0r3Lor3', 'Find me  on port 222 modchat@192.168.0.250'),
       ('julieroberts', 'juliePass', 'Busy coding away'),
       ('ryancooper', 'Password321', 'Preparing for a presentation'),
       ('karenthompson', 'Pass@123', 'On a lunch break'),
       ('andrewmiller', 'Password654!', 'Went outside to touch the grass'),
       ('susanwilson', 'pass789word', 'Collaborating with the team on a new feature'),
       ('danieljackson', 'danielPass', 'Taking a coding break, playing ping pong'),
       ('hannahbrown', 'Password123!', 'Cracking the code and making magic happen'),
       ('buliver', 'Password987', 'How do I exit VIM?'),
       ('lilywilliams', 'pass@456', 'Attending a professional development workshop'),
       ('matthewdavis', 'pass123456', 'Attending meetings back-to-back, but reachable');
