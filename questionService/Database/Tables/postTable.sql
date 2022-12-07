CREATE TABLE post_tbl(
	post_id	varchar(255) PRIMARY KEY NOT NULL,
	user_id VARCHAR(255) FOREIGN KEY REFERENCES usertbl(user_id),
	post_date DATE NOT NULL,
	question VARCHAR(255) NOT NULL,
	category VARCHAR(255) NOT NULL
)

DROP TABLE post_tbl
SELECT * FROM post_tbl

INSERT INTO post_tbl(post_id,post_date, question,category) VALUES('jdj6', GETDATE(),'what is the native lang of your village','general')