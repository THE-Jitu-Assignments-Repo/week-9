CREATE OR ALTER PROC sp_postOrEditAnswer(
	@answerID VARCHAR(255),
	@userID VARCHAR(255),
	@postID VARCHAR(255),
	@answer TEXT)
AS
BEGIN
SET NOCOUNT ON;
IF EXISTS(SELECT * FROM Answer_tbl WHERE user_id=@userID)
	UPDATE Answer_tbl SET answer_date=GETDATE(), answer=@answer WHERE user_id=@userID;
ELSE
	INSERT INTO Answer_tbl(answer_id, user_id, post_id,answer_date,answer) VALUES(@answerID,@userID,@postID,GETDATE(),@answer)
END


Exec sp_postOrEditAnswer'ee3','b498584e-1f12-4e2f-a51b-d22e7712d952', '280aada9-eadb-45d1-8ca1-7ebe8b623f3f','kenya have not participated';
