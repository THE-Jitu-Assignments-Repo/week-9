CREATE OR ALTER PROC sp_upvoteOrDownvote(
	@voteID VARCHAR(255),
	@userID VARCHAR(255),
	@answerID VARCHAR(255),
	@direction VARCHAR(50)
	)
AS
BEGIN
	SET NOCOUNT ON;
	DECLARE @exists bit;
	SELECT @exists = count(vote_id) FROM vote_tbl WHERE user_id=@userID AND answer_id=@answerID AND votes=0
	IF @exists > 0 and @direction='up'
	BEGIN
		UPDATE vote_tbl SET votes=1 WHERE user_id=@userID AND answer_id=@answerID;
	END
			
	SET @exists = 0;
	SELECT @exists = count(vote_id) FROM vote_tbl WHERE user_id=@userID AND answer_id=@answerID AND votes=1
	IF @exists > 0 and @direction = 'down'
	BEGIN
		UPDATE vote_tbl SET votes=0 WHERE user_id=@userID AND answer_id=@answerID;
	END
			
	SET @exists = 0;
	SELECT @exists = count(vote_id) FROM vote_tbl WHERE user_id=@userID AND answer_id=@answerID
	IF @exists < 1
	BEGIN
		INSERT INTO vote_tbl(vote_id, user_id, answer_id, votes) 
			VALUES(@voteID, @userID, @answerID, 1);
	END
			
	
	SELECT * FROM vote_tbl WHERE user_id=@userID AND answer_id=@answerID;
END


--- TEST--
SELECT * FROM vote_tbl 
delete from vote_tbl