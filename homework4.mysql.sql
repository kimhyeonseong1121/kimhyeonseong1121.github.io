CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100),
    type VARCHAR(50),
    category VARCHAR(50),
    quantity INT,
    total_price INT,
    order_time DATETIME DEFAULT CURRENT_TIMESTAMP
);