-- Create table
CREATE TABLE users (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  status VARCHAR(100) NOT NULL
);

-- Insert sample user data
INSERT INTO users (username, password, status)
VALUES ('johndoe', 'password123', 'Out of office - taking a well-deserved break!'),
       ('janedoe', 'pass123word', 'Currently on vacation, exploring new horizons'),
       ('mikesmith', 'securepass', 'Taking a quick power nap 😴'),
       ('sarahjones', 'password!23', 'Engrossed in deep work mode, creating something amazing'),
       ('alexwilson', 'alexpass123', 'Busy brainstorming and ideating'),
       ('emilybrown', 'password456', 'On a call 📞'),
       ('justjohn', 'myimposiblePassw0rd41', 'Looking into LeakedDoc.txt 👀'),
       ('davidlee', 'pass987word', 'In research mode 🔍'),
       ('amynguyen', 'password!@#', 'In a state of flow, do not disturb'),
       ('peteradams', 'p@ssw0rd', 'Taking a coffee break ☕️'),
       ('laurasmith', 'password789', 'Diving into data and crunching numbers'),
       ('rootchat', 'M0r3Lor3', 'Find me root@192.168.10.232'),
       ('julieroberts', 'juliepass', 'Busy coding away 💻'),
       ('ryancooper', 'password321', 'Preparing for a presentation 📊'),
       ('karenthompson', 'pass@123', 'On a lunch break 🍽️'),
       ('andrewmiller', 'password654', 'Taking a short walk for fresh air 🌳'),
       ('susanwilson', 'pass789word', 'Collaborating with the team on a new feature 🤝'),
       ('danieljackson', 'danielpass', 'Taking a coding break, playing ping pong 🏓'),
       ('hannahbrown', 'password123!', 'Cracking the code and making magic happen'),
       ('robertrodriguez', 'password987', 'Away from the keyboard, taking a break'),
       ('lilywilliams', 'pass@456', 'Attending a professional development workshop 📚💡'),
       ('matthewdavis', 'pass123456', 'Attending meetings back-to-back, but reachable');

