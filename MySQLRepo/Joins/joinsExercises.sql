-- Here we're going to do some exercises with joins.
-- Preliminary: writing requested schema.
-- CREATE DATABASE students_data;
-- USE students_data;
-- creating students table.
CREATE TABLE students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50)
);

-- creating papers table (note that we have a one->many relation)
CREATE TABLE papers(
    title VARCHAR(50),
    grade INT,
    student_id INT,
    FOREIGN KEY(student_id)
        REFERENCES students(id)
        ON DELETE CASCADE
);

-- inserting data
INSERT INTO students (first_name) VALUES 
('Caleb'), ('Samantha'), ('Raj'), ('Carlos'), ('Lisa');

INSERT INTO papers (student_id, title, grade ) VALUES
(1, 'My First Book Report', 60),
(1, 'My Second Book Report', 75),
(2, 'Russian Lit Through The Ages', 94),
(2, 'De Montaigne and The Art of The Essay', 98),
(4, 'Borges and Magical Realism', 89);

-- viewing data
SELECT * FROM students;
SELECT * FROM papers;

-- first exercise; printing names and titles ordered by grade
SELECT 
    first_name,
    title AS 'title (ordered by grade; ex. 1)',
    grade
FROM papers
LEFT JOIN students
    ON student_id = students.id
ORDER BY grade DESC;

-- second exercise; all names and all associated grades (if any)
SELECT
    first_name,
    title AS 'title (all; ex. 2)',
    grade
FROM students
LEFT JOIN papers
    ON id = papers.student_id;
    
-- third exercise; repeat #2 but fill NULL
SELECT 
    first_name,
    IFNULL(title,'MISSING') AS 'title',
    IFNULL(grade,0) AS 'grade'
FROM students
LEFT JOIN papers
    ON id = papers.student_id;

-- fourth exercise; computing average of papers
SELECT
    first_name,
    IFNULL(AVG(grade),0) AS average
FROM students
LEFT JOIN papers
    ON id = papers.student_id
GROUP BY first_name
ORDER BY average DESC;

-- fifth exercise; passing status
SELECT
    first_name,
    IFNULL(AVG(grade),0) AS average,
    CASE
        WHEN IFNULL(AVG(grade),0) >= 70.0 THEN 'PASSING'
        ELSE 'FAILING'
    END AS 'passing_status'
FROM students
LEFT JOIN papers
    ON id = papers.student_id
GROUP BY first_name
ORDER BY average DESC;

-- cleaning up
DROP TABLE papers, students;