export interface IMusic
{
   id:number,
   name:string,
   cover:string,
   bio:string,
   albums:{
       albumId:number,
       title:string,
       year:number,
       cover:string,
       price:number
   }

}
