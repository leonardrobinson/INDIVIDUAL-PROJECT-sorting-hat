//Get organized

const students = [
    { id: 1, name: "Harry Potter", house: "Gryffindor" },
    { id: 2, name: "Abyssinia", house: "Slytherin"},
    { id: 3, name: "Nestor Tarry", house: "Ravenclaw" },
    { id: 4, name: "Thrasher", house: "Hufflepuff" },

];



const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

        //function to create student cards needs to be worked on

  const createStudentCard(studentName, house) {
    return
    <div class="card">
        <h2>${studentName}</h2>
        <p>House: ${house}</p>
    </div>
    ;
  };
///////Array to store student cards
  let cardsOnDom = [];

//Add the students to the cardsOnDom array and to render them
  const addStudentToDom = (name, house) {
    cardsOnDom.push({ name, house });
    displayAllCards();
};

  //HTMl FOR ALL STUDENTS IN cardsOnDom
  const displayAllCards() => {
  let allCardsHTML = '';
  for (const student of cardsOnDom) {
    allCardsHtml += createStudentCard(student.name, student.house);
  }

  
  renderToDom('#studentsArea', allCardsHtml);
};
//Rendering students and adding students 
addStudentToDom('Harry Potter', 'Gryffindor');
addStudentToDom('Abyssinia', 'Slytherin');
addStudentToDom('Nestor Tarry', 'Ravenclaw');
addStudentToDom('Thrasher', 'Hufflepuff');



//1. setting location 

const Targethtml=document.querySelector("#sortingApp")

//2. empty string and making function for filter

const cardsOnDom = (array)=> {
    let domString = "";

    //filling in empty string
<div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

}
//Filter
<div class="all-buttons">
<button class= "btn btn-primary" id= "gryffindor">Gryffindor <Students</button>
<button class= "btn btn-primary" id= "slytherin">Slytherin <Students</button>
<button class= "btn btn-primary" id= "hufflepuff">Hufflepuff<Students</button>
<button class= "btn btn-primary" id= "ravenclaw">Ravenclaw<Students</button>


//********* Create******* */




///// Delete////
