create or alter proc sp_getPostDetails(@postID varchar(255))
as
begin 
set nocount on;
	select username, email, imageUrl from usertbl as U  
	left join post_tbl as P on P.user_id=U.user_id where P.post_id= @postID
end