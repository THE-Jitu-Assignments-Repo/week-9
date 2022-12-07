CREATE OR ALTER PROC sp_postQuestion(
	@postID VARCHAR(255),
	@question VARCHAR(255),
	@category VARCHAR(255))
AS
BEGIN
	INSERT INTO post_tbl(post_id,post_date,question,category) VALUES(@postID, GETDATE(), @question, @category)
END