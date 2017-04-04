function roomMates( rooms, floor ){
console.log(rooms,floor);
if(floor === 2 && rooms.length < 12) return [];
  return rooms.filter((guest,index) => {
   var some = floor === 2 ? index >=6 : index <= 5;
   return some && guest != '';
  });
}