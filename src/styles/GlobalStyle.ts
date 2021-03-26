import { createGlobalStyle }  from "styled-components";

export default createGlobalStyle`
  *{
      margin: 0;
      padding:0%;
      font-family: Arial, Helvetica, sans-serif;
      box-sizing: border-box;
   }
   :root{
      --black:#000000;
      --white:#ffffff;
   }
   .container{
      display:flex;
      align-items:center;
      width:100%;
      max-width: 1350px;
      margin: 0 auto; 

      @media (max-width:992px){
         max-width:960px;
      }
      @media (max-width:768px){
         max-width:720px;
      }
      @media (max-width:576px){
         width:100%;
      }
      .ColoredLine{
         border: solid 2px black;
         background-color: black;
         display: block;
         margin-block-end: 1.5px;   
      }
   }
`
