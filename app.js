
class student { //Objeto para crear un alumno
    constructor (fullName, lastName, age){
        this.fullName = fullName;
        this.lastName = lastName;
        this.age = age;
        this.notes = [];
    }
}

class classMatter { //Objeto para crear una clase
    constructor (name){
        this.name = name;
        this.students = []; //Almacenar alumnos inscritos
    }
} 


const firstName = document.querySelector('#nameStudent');
const lastName = document.querySelector('#lastNameStudent');
const age = document.querySelector('#age');
let students = [];

const subject = document.querySelector('.subject');
const numberStudent = document.querySelector('.number-student');
const note = document.querySelector('.note');
let subjects = [];


//Función para crear un nuevo alumno y mostrarlo en la web
function getStudent (){
    const newStudent = new student(firstName.value, lastName.value, age.value);
    students.push (newStudent);

    const newElement = document.createElement ("li");
    newElement.className = "list-group-item";
    newElement.textContent = `${firstName.value} ${lastName.value}`;

    document.getElementById("lista").appendChild(newElement);
}

// Función para crear y asignar una materia
function subjectCreate(){
    const newSubject = new classMatter(subject.value);
    newSubject.students = students[numberStudent.value -1];
    subjects.push (newSubject);
}






