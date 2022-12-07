CREATE OR ALTER PROC sp_postOrEditQuestion(
	@postID VARCHAR(255),
	@question VARCHAR(255),
	@category VARCHAR(255))
AS
BEGIN
SET NOCOUNT ON;
IF EXISTS(SELECT * FROM post_tbl WHERE post_id=@postID)
	UPDATE post_tbl SET post_date=GETDATE(), question = @question, category= @category WHERE post_id=@postID
ELSE
	INSERT INTO post_tbl(post_id,post_date,question,category) VALUES(@postID, GETDATE(), @question, @category)
END