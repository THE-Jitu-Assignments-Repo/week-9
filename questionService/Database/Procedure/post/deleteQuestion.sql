CREATE OR ALTER PROC sp_deleteQuestion(@postID VARCHAR(255))
AS
BEGIN
SET NOCOUNT ON;
  DELETE FROM post_tbl WHERE post_id = @postID
END;

exec sp_deleteQuestion'20f909e4-59b5-4923-93d8-0d337593878c';
