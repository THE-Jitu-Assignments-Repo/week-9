CREATE OR ALTER PROC sp_loginUser(
	@email varchar(50))
AS
BEGIN
SET NOCOUNT ON;
	SELECT * FROM usertbl WHERE email=@email;
END