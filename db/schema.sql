DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department(
	id INT AUTO-INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);


CREATE TABLE employee(
	id INT AUTO-INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    INDEX role_index (role_id),
    CONSTRAINT fk_role foreign key (role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager _id INT,
    INDEX manager_index (manager_id),
    CONSTRAINT fk_manager foreign key (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);



CREATE TABLE role(
	id INT AUTO-INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary INT NOT NULL,
    department_id INT NOT NULL,
    INDEX department_index(department_id),
    CONSTRAINT fk_department foreign key (department_id) REFERENCES department(id) ON DELETE CASCADE

);