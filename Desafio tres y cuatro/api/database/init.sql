-- Active: 1720531934209@@127.0.0.1@5432@likeme2
CREATE DATABASE likeme2;

CREATE TABLE posts (
    id SERIAL, 
    titulo VARCHAR(25),
    img VARCHAR(1000),
    descripcion VARCHAR(255),
    likes INT
    );
