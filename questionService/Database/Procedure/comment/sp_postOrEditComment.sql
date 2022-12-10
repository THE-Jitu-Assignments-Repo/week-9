
CREATE OR ALTER PROC sp_postOrEditComment(
	@commentID VARCHAR(255),
	@userID VARCHAR(255),
	@answerID VARCHAR(255),
	@comment TEXT
)
AS
BEGIN
SET NOCOUNT ON;
IF EXISTS(SELECT * FROM comment_tbl	WHERE user_id=@userID)
	UPDATE comment_tbl SET comment_date=GETDATE(), comment=@comment WHERE user_id=@userID;
ELSE
	INSERT INTO comment_tbl(comment_id, user_id, answer_id,comment_date,comment) VALUES(@commentID,@userID,@answerID,GETDATE(),@comment)
END