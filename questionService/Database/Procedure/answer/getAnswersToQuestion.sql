CREATE OR ALTER PROC sp_getAnswers(@postID VARCHAR(255))
As
BEGIN
SET NOCOUNT ON;
	SELECT * FROM Answer_tbl where post_id= @postID AND isDeleted=0;
END
