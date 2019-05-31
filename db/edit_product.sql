UPDATE products SET name = $2
WHERE product_id = $1;

UPDATE products SET price = $3
WHERE product_id = $1;

UPDATE products SET image_url = $4
WHERE product_id = $1;
