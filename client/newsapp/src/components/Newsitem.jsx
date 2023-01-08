// import React from "react";
// import { useState } from "react";

// //"https://newsapi.org/v2/top-headlines/country=us/apiKey=57834d0a81c74f13b0390aa8fae15f6c"

// export default function Newsitem() {
//   const [arr, setArr] = useState([]);
//   async function getData() {
//     const result = await fetch("/api");
//     const obj = await result.json();
//     console.log(obj.articles);

//     const mappedComp = await obj.articles.map((element) => {
//       return (
//         <div className="card m-1 col col-md-4  mx-auto">
//           <img src={element.urlToImage} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{element.title}</h5>
//             <p className="card-text">{element.description}</p>
//             <a href={element.url} className="btn btn-primary">
//               Read more
//             </a>
//           </div>
//         </div>
//       );
//     });

//     return await mappedComp;
//   }

//   getData().then((response) => {
//     setArr(response);
//   });

//   console.log(arr);

//   return (
//     <div className="container">
//       <div className="row row-cols-3" style={{ width: "100%" }}>
//         {arr}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function Newsitem() {
  const [arr, setArr] = useState([]);

  async function getData() {
    const result = await fetch("/api");
    const obj = await result.json();
    console.log(obj.articles);

    const mappedComp = obj.articles.map((element, index) => {
      return (
        <div key={index} className="card m-1 col col-md-4  mx-auto">
          <img src={element.urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.description}</p>
            <a href={element.url} className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      );
    });

    setArr(mappedComp);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-3" style={{ width: "100%" }}>
        {arr}
      </div>
    </div>
  );
}
