

//  const removeCardHandler = (name, animals) => {
//     console.log("remove card clicked", name);
//     const updateArray = animals.filter(
//       (animal) => animal.name !== name
//     )
//     return updateArray;
//   }

//  const addLikeHandler = (name, animals) => {
//     console.log("add like clicked");
//     this.state((state) => {
//       const updateArray = animals.map((animal) => {
//         if (animal.name === name) {
//           return { ...animal, likes: animal.likes + 1 };
//         } else {
//           return animal;
//         }
//       });
//       return updateArray;
//     });
// }

//  const searchHandler = (event) => {
//     this.setState({ search: event.target.value })
//     console.log(event.target.value);
//   }

//   const animalFilter = (animals) => {
//     animals.filter((animal) => {
//         return animal.name.includes(this.state.search);
//       });
//   }

  

//  module.exports = { removeCardHandler, addLikeHandler, searchHandler, animalFilter }