create or alter proc getAllUsers
as 
begin
	select u.user_id, u.username,u.imageUrl, u.email, 
	  (select count(P.post_id) from post_tbl P where P.user_id= u.user_id and isDeleted=0)totalQst,
	(select count(v.votes) from vote_tbl v where v.user_id=u.user_id and v.votes=1) totalVotes
	from usertbl u;
end