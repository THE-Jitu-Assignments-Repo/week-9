CREATE OR ALTER PROC sp_upvoteOrDownvote(
	@voteID VARCHAR(255),
	@userID VARCHAR(255),
	@answerID VARCHAR(255),
	@votes INT)
AS
BEGIN
SET NOCOUNT ON;
IF EXISTS(  WHERE answer_id=@answerID AND user_id=@userID)
	UPDATE vote_tbl SET votes=@votes WHERE answer_id=@answerID AND user_id= @userID;
ELSE
	INSERT INTO vote_tbl(vote_id,user_id,answer_id,votes) VALUES(@voteID, @userID,@answerID,@votes)
END