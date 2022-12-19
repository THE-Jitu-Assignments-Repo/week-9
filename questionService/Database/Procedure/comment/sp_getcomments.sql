CREATE OR ALTER PROC sp_getComments(@answerID VARCHAR(255))
As
BEGIN
SET NOCOUNT ON;
	SELECT C.comment_id, C.user_id,C.answer_id,C.comment_date,C.comment, U.username, U.imageUrl,U.email 
	FROM comment_tbl C left join usertbl U on C.user_id=U.user_id
	where answer_id= @answerID and isDeleted=0;
END


exec sp_getComments'a1010d41-d57a-4362-ac52-722bec4a6444'