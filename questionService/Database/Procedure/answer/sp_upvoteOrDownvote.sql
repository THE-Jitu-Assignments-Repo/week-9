CREATE OR ALTER PROC sp_upvoteOrDownvote(@answerID VARCHAR(255))
AS
BEGIN
SET NOCOUNT ON;
IF EXISTS(SELECT * FROM Answer_tbl WHERE answer_id=@answerID AND vote=0 OR vote=-1)
	UPDATE Answer_tbl SET vote=1 WHERE answer_id=@answerID;
ELSE
	UPDATE Answer_tbl SET vote=-1 WHERE answer_id=@answerID;
END