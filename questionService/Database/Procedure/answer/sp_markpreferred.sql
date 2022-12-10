CREATE OR ALTER PROC sp_markPreferred(@answerID VARCHAR(255))
AS
BEGIN
SET NOCOUNT ON;
IF EXISTS(SELECT * FROM Answer_tbl WHERE answer_id=@answerID AND preferred=0)
	UPDATE Answer_tbl SET preferred=1 WHERE answer_id=@answerID;
ELSE
	UPDATE Answer_tbl SET preferred=0 WHERE answer_id=@answerID;
END