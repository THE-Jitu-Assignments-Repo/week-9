CREATE OR ALTER PROC sp_getAnswers(@postID VARCHAR(255))
As
BEGIN
SET NOCOUNT ON;
	SELECT A.answer_id,A.user_id, A.post_id, A.answer_date, A.preferred, A.answer, U.username, U.email, U.imageUrl,
	(select count(V.votes) from vote_tbl V where V.answer_id = A.answer_id and V.votes=1)totalVotes,
	(select count(C.answer_id) from comment_tbl C where C.answer_id=A.answer_id and isDeleted=0)totalComments
	FROM Answer_tbl A 
	LEFT JOIN usertbl U on A.user_id =U.user_id where A.post_id= @postID and isDeleted=0;
END