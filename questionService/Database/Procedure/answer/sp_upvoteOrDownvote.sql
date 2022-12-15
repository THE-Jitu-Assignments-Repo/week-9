CREATE OR ALTER PROC sp_upvoteOrDownvote(
	@voteID VARCHAR(255),
	@userID VARCHAR(255),
	@answerID VARCHAR(255)
	)
AS
BEGIN
	SET NOCOUNT ON;
	DECLARE @exists bit;
	SELECT @exists = count(vote_id) FROM vote_tbl WHERE user_id=@userID AND answer_id=@answerID AND votes=0
	IF @exists > 0
		UPDATE vote_tbl SET votes=1 WHERE user_id=@userID;
	ELSE
	BEGIN
		SET @exists = 0;
		SELECT @exists = count(vote_id) FROM vote_tbl WHERE user_id=@userID AND answer_id=@answerID AND votes=1
		IF @exists > 0
			UPDATE vote_tbl SET votes=0 WHERE user_id=@userID ;
		ELSE 
			INSERT INTO vote_tbl(vote_id, user_id, answer_id, votes) 
			VALUES(@voteID, @userID, @answerID, 1);	
	END
END



--- TEST--
SELECT * FROM vote_tbl 
delete from vote_tbl