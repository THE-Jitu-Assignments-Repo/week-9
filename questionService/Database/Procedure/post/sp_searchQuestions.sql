CREATE OR ALTER PROC sp_searchQuestions(@text VARCHAR(255))
AS
BEGIN
SET NOCOUNT ON;
	SELECT * FROM post_tbl WHERE question LIKE '%'+ @text+'%' 
END