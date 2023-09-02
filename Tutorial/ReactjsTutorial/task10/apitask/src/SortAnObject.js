import React, { useState } from "react";

const Task9 = () => {
  const [visibility, setVisibility] = useState(false);
  const [array, setArray] = useState("");

  //   const arr = [1, 4, 6, 4, 32, 908, 56, 34, 5];
  //   // ascending order
  //   const asc = arr.sort((a, b) => {
  //     return a - b;
  //   });
  //   console.log(asc);

  //   // descending order
  //   const dsc = arr.sort((a, b) => {
  //     return b - a;
  //   });
  //   console.log(dsc);

  const students = [
    {
      title: "Alight Road Ahead",
      author: "Bill Gates",
      libraryID: 1254,
    },
    {
      title: "Close Isaacson",
      author: "Steve Jobs",
      libraryID: 4264,
    },
    {
      title: "Bill: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
  ];
  //   console.log("students = ", studentsDuplicate);

  //   setTimeout(() => {
  //     setArray(result);
  //   }, 1000);

  //   var comparison = 0;
  //   const sorting = library.sort((a, b) => {
  //     const aaa = a.title.toLowerCase();
  //     const bbb = b.title.toLowerCase();
  //     if (aaa > bbb) {
  //       return (comparison = 1);
  //     } else if (bbb > aaa) {
  //       return (comparison = -1);
  //     }
  //   });

  //   console.log("library = ", library);
  //   console.log("sortedObject = " + sorting);

  // show button after 3 seconds

  setTimeout(() => {
    const compareName = (a, b) => {
      // converting to uppercase to have case-insensitive comparison
      const title1 = a.title.toUpperCase();
      const title2 = b.title.toUpperCase();
      let comparison = 0;
      if (title1 > title2) {
        comparison = 1;
      } else if (title1 < title2) {
        comparison = -1;
      }
      return comparison;
    };
    setVisibility(true);
    const result = students.sort(compareName).reverse();
    // console.log("sort = ", result);
    setArray(result);
    // console.log("sort = ", students.sort(compareName).reverse());
  }, 3000);

  console.log(array);
  return (
    <div>
      <p>
        Q9 program to sort an array of JavaScript objects and use the setTimeout
        function and add the button after 3 second button is visible and before
        3 sec. button is invisible
      </p>
      <br />
      {/* <p>
        {result.map((elements) => {
          <p>{elements.title}</p>;
        })}
      </p> */}
      {/* <p>{typeof array}</p>
      <p>{}</p> */}
      <p>
        {/* {array.map((elements) => {
          elements;
        })} */}
      </p>
      {visibility && <button class="btn btn-primary">Click here</button>}
    </div>
  );
};

export default Task9;
