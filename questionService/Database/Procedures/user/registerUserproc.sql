CREATE OR ALTER PROC sp_registerUser(
	@userID varchar(255), 
	@username varchar(255),
	@email varchar(50),
	@password varchar(255),
	@imageUrl varchar(255))
AS
BEGIN
SET NOCOUNT ON;
IF EXISTS(select * from usertbl where email = @email)
	SELECT username FROM usertbl where email=@email
ELSE
	INSERT INTO dbo.usertbl(user_id, username, email,password,imageUrl) VALUES(@userID, @username,@email,@password, @imageUrl);
END

EXECUTE sp_registerUser;