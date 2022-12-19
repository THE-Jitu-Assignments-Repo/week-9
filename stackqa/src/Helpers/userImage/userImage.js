// export const userImage= (imageStr='')=>{
//     imageStr=imageStr.split(' ')
//     let userAvatar = imageStr[0][0] + imageStr[1][0]
//     return userAvatar
// }

export const createAvatar = (str = '') => {
  str = str.split(' ');
  let avatar = str[0][0] || str[0][0]+str[1][0];
  return avatar;
}