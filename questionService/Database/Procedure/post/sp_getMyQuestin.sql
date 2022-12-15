CREATE OR ALTER PROC sp_getMyQuestions(@userID VARCHAR(255))
AS
BEGIN
SET NOCOUNT ON;
  SELECT * FROM post_tbl WHERE user_id = @userID AND isDeleted=0
END;