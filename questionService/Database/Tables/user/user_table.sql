CREATE TABLE usertbl(
	user_id VARCHAR(255) PRIMARY KEY NOT NULL,
	username VARCHAR(255) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(255) NOT NULL,
	imageUrl VARCHAR(255)
);

select * from usertbl;