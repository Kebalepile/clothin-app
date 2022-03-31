export default () => {
  return `
    <style>
    *{
        box-sizing: content-box;
        margin: 0;
        padding: 0;
        color: whitesmoke;
        font-family: Arial, Helvetica, sans-serif;
        text-overflow: ellipsis;
    }
    #navbar{
        display:flex;
        flex-flow: row nowrap;
        width:100%;
        z-index:5;
        justify-content: space-between;
        align-items:center;
        background-color:orange;
        padding:2px;
        position:fixed;
        bottom:0;
        left:0;
        right:0;
      }
     
      #search-input{
          display:none;
          position:fixed;
          height:30px;
          width:250px;
          background-color:white;
          color:gray;
          border:none;
          border-bottom: 2px solid #89cff0;
          border-radius:3px 3px 0 0;
          bottom:60px;
          left: 20%; /* Negative half of width. */
          right:20%;
      }
      #search-input::placeholder{
          text-align:center;
      }
      li{
        list-style-type:none;
      }
      svg {
        height:50px;
        width:110px;
        pointer-events: none;
      }
      
     #sidebar{
        position:fixed;
        bottom:59px;
        left:-1px;
        display:none; 
        flex-flow:column wrap; 
        align-items:center;
        justify-content:space-evenly;
        padding:5px 5px 5px 0;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        width: 30vw;
        height:60vh;
        border: 1px solid white;
        border-radius:2px;
      }
      .info-card{
        position:fixed;
        display:none;
        flex-flow: column wrap;
        align-items:center;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(5px);
        width: 300px;
        margin: auto;
        top:20%;
        left:5%;
        border: 1px solid white;
        border-radius:3px;
        font-size:15px;
        text-align: left;
        padding:10px;
       }
       .info-card > button {
            color:white;
            background-color:orange;
            border-radius:3px;
            border:none;
            width:100px;
            height:30px;
        
        }
       .info-card a {
        
        text-decoration:none;
        height:10px;
        font-size:18px;
        margin-bottom:25px;
       }
       .info-card > a > svg {
        width:30px;
        height:30px;
       }
       a:visited, a:active, a:link {
         color:white;
       }
      #about-us{
         backdrop-filter:blur(20px);
         text-shadow: 0 0 2px black;
       }
      .product-card {
        display:flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items:center;
        background-color:white;
        color:#3B3636;
        width:60vw;
        height:60vh;
        margin:auto auto 55px auto;
        border-radius:2px;
        padding:10px;
        }
        .product-card img{
          width:200px;
          height:200px;
        }
        .product-card  button {
          color:white;
          width:70px;
          height:30px;
          background-color: #228B22;
          backdrop-filter: blur(2px);
          border:none;
          border-radius:2px;
          margin: 20px;
        }
        .product-card  select {
          background-color:#676CE4;
          color:white;
          border:none;
          border-radius:2px;
          height:30px;
          width:40px;
          text-align:right;
          margin: 20px;
        
        }
        .product-card div {
          font-weight: bold;
        }
        #info{
          background-color:#0C82E0;
          border-radius:2px;
          color:orange;
          height:130px;
          width:95%;
          text-align:justify;
          display:flex;
          flex-flow:column wrap;
          align-item:center;
          justify-content:center;
          padding-left:15px;
          text-shadow:0 0 1px white;
          
        }
      
    </style>`;
};
