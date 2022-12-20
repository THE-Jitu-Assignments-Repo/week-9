CREATE OR ALTER PROC sp_getUserDetails(@userID VARCHAR(255))
AS
BEGIN
SET NOCOUNT ON;
	SELECT U.username,U.email,U.imageUrl,
  (select count(P.post_id) from post_tbl P where P.user_id= @userID and isDeleted=0)totalQst,
  (select count(A.answer_id) from Answer_tbl A where A.user_id=@userID and isDeleted=0)totalAns,
  (select count(A.preferred) from Answer_tbl A where A.user_id=@userID and A.preferred=1 and isDeleted=0) totalPrefers
  FROM usertbl U WHERE U.user_id = @userID;
END;