create or alter proc sp_getAnswerDetails(@answerID varchar(255))
as
begin 
set nocount on;
	select username, email, imageUrl from usertbl as U  
	left join Answer_tbl as A on A.user_id=U.user_id where A.answer_id= @answerID
end