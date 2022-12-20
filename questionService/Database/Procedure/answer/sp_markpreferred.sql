CREATE OR ALTER PROC sp_markPreferred(@postID VARCHAR(255),@answerID VARCHAR(255))
AS
BEGIN
BEGIN
SET NOCOUNT ON;
	DECLARE @exists BIT;
	SELECT @exists = count(A.answer_id) FROM Answer_tbl A WHERE A.answer_id=@answerID and A.post_id=@postID;
	IF @exists > 0
		UPDATE Answer_tbl SET preferred=0 where post_id=@postID;
	END
	BEGIN
		IF EXISTS(select * from Answer_tbl where answer_id=@answerID)
		UPDATE Answer_tbl SET preferred=1 WHERE answer_id=@answerID;
	END
END