CREATE OR ALTER PROC sp_getQuestions
AS
BEGIN
SET NOCOUNT ON;
  SELECT P.post_id, P.user_id,P.post_date, P.question, P.category, U.username,U.email,U.imageUrl 
  FROM post_tbl P LEFT JOIN usertbl U ON P.user_id=U.user_id WHERE isDeleted = 0;
END;