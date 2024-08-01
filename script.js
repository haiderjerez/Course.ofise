// Datos iniciales de ejemplo
let courses = [
    {
        id: 1,
        name: "Curso De Drift",
        description: "Este es la descripción de un curso, acá es donde va toda la información para dar a conocer lo que se le quiere transmitir al cliente.",
        price: 10000000,
        img: "img/drift.jpeg"
    },
    {
        id: 2,
        name: "Curso De Moto Alto cc",
        description: "Este es la descripción de un curso, acá es donde va toda la información para dar a conocer lo que se le quiere transmitir al cliente.",
        price: 2000000,
        img: "img/bmw-s1000rr.jpg"
    },
    {
        id: 3,
        name: "Curso De Moto Bajo cc",
        description: "Este es la descripción de un curso, acá es donde va toda la información para dar a conocer lo que se le quiere transmitir al cliente.",
        price: 900000,
        img: "img/pulsar.jpg"
    },
    {
        id: 4,
        name: "Curso De Cocina Colombiana",
        description: "Este es la descripción de un curso, acá es donde va toda la información para dar a conocer lo que se le quiere transmitir al cliente.",
        price: 2500000,
        img: "img/cocina-colombiana.jpg"
    },
    {
        id: 5,
        name: "Curso De Cocina Italiana",
        description: "Este es la descripción de un curso, acá es donde va toda la información para dar a conocer lo que se le quiere transmitir al cliente.",
        price: 2000000,
        img: "img/cocina-italiana.jpeg"
    },
    {
        id: 6,
        name: "Curso De TATTOO",
        description: "Este es la descripción de un curso, acá es donde va toda la información para dar a conocer lo que se le quiere transmitir al cliente.",
        price: 5500000,
        img: "img/curso-tatuaje.jpg"
    }
];

// Cursos obtenidos
let obtainedCourses = [];

// Función para mostrar la lista de cursos
function displayCourses(courseList = courses) {
    const courseContainer = document.querySelector('.box');
    courseContainer.innerHTML = '';

    courseList.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'curso';
        courseDiv.innerHTML = `
            <h3 class="subTitle">${course.name}</h3>
            <img class="img-course" src="${course.img}" alt="${course.name}">
            <p class="description">${course.description}</p>
            <h3 class="price">$${course.price.toLocaleString()}</h3>
            <button class="agregar" onclick="addCourse(${course.id})">Agregar</button>
            <button class="eliminar" onclick="deleteCourse(${course.id})">Eliminar</button>
        `;
        courseContainer.appendChild(courseDiv);
    });
}

// Función para buscar cursos
function searchCourses() {
    const searchTerm = document.querySelector('input[name="search"]').value.toLowerCase();
    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm)
    );
    displayCourses(filteredCourses);
}

// Función para agregar un curso a la lista de cursos obtenidos
function addCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course && !obtainedCourses.includes(course)) {
        obtainedCourses.push(course);
        displayObtainedCourses();
    }
}

// Función para mostrar los cursos obtenidos
function displayObtainedCourses() {
    const obtainedCoursesList = document.querySelector('.obtenidos .list');
    obtainedCoursesList.innerHTML = '';

    obtainedCourses.forEach(course => {
        const courseItem = document.createElement('li');
        courseItem.className = 'curse-obt';
        courseItem.textContent = course.name;
        obtainedCoursesList.appendChild(courseItem);
    });
}

// Función para eliminar un curso
function deleteCourse(courseId) {
    courses = courses.filter(course => course.id !== courseId);
    displayCourses();
}

// Inicializar la visualización de los cursos y configurar la búsqueda
document.addEventListener('DOMContentLoaded', () => {
    displayCourses();
    document.querySelector('input[name="search"]').addEventListener('keyup', searchCourses);
});