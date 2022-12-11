
CREATE OR ALTER PROC sp_postOrEditAnswer(
	@answerID VARCHAR(255),
	@userID VARCHAR(255),
	@postID VARCHAR(255),
	@answer TEXT)
AS
BEGIN
SET NOCOUNT ON;
IF EXISTS(SELECT * FROM Answer_tbl WHERE user_id=@userID AND post_id=@postID)
	UPDATE Answer_tbl SET answer_date=GETDATE(), answer=@answer WHERE user_id=@userID AND post_id=@postID;
ELSE
	INSERT INTO Answer_tbl(answer_id, user_id, post_id,answer_date,answer) VALUES(@answerID,@userID,@postID,GETDATE(),@answer)
END
