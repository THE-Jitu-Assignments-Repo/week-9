CREATE OR ALTER PROC sp_topSuggested(@value varchar(255))
AS
BEGIN
SET NOCOUNT ON;
SELECT P.post_id, P.user_id,P.post_date, P.question, P.category, U.username,U.email,U.imageUrl,
  (select count(P.post_id) from post_tbl P where U.user_id= P.user_id and isDeleted=0)totalQst,
  (select count(A.post_id) from Answer_tbl A where A.post_id=P.post_id)totalAns
  FROM post_tbl P LEFT JOIN usertbl U ON P.user_id=U.user_id WHERE P.category=@value;
END;