CREATE TABLE Answer_tbl(
	answer_id	varchar(255) PRIMARY KEY NOT NULL,
	user_id VARCHAR(255) FOREIGN KEY REFERENCES usertbl(user_id),
	post_id VARCHAR(255) FOREIGN KEY REFERENCES post_tbl(post_id),
	answer_date DATE NOT NULL,
	answer TEXT NOT NULL,
	preferred BIT DEFAULT 0,
	vote INT DEFAULT 0
	)

alter table Answer_tbl alter column answer text not null;
SELECT * FROM Answer_tbl

INSERT INTO Answer_tbl(answer_id,answer_date, answer) VALUES('jdjcc26', GETDATE(),'what is the native lang of your village')
