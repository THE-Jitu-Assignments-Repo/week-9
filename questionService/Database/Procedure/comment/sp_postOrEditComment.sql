CREATE OR ALTER PROC sp_postOrEditComment(
	@commentID VARCHAR(255),
	@userID VARCHAR(255),
	@answerID VARCHAR(255),
	@comment TEXT
)
AS
BEGIN
SET NOCOUNT ON;
IF EXISTS(SELECT * FROM comment_tbl	WHERE comment_id=@commentID)
	UPDATE comment_tbl SET comment_date=GETDATE(), comment=@comment WHERE comment_id=@commentID;
ELSE
	INSERT INTO comment_tbl(comment_id, user_id, answer_id,comment_date,comment) VALUES(@commentID,@userID,@answerID, GETDATE(),@comment)
END