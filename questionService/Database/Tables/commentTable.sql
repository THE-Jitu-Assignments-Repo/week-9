CREATE TABLE comment_tbl(
	comment_id	varchar(255) PRIMARY KEY NOT NULL,
	user_id VARCHAR(255) FOREIGN KEY REFERENCES usertbl(user_id),
	answer_id VARCHAR(255) FOREIGN KEY REFERENCES Answer_tbl(answer_id),
	comment_date DATE NOT NULL,
	comment VARCHAR(255) NOT NULL
)

SELECT * FROM comment_tbl

INSERT INTO comment_tbl(comment_id,comment_date, comment) VALUES('jdjcc3326', GETDATE(),'what is the native lang of your village')
