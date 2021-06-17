
function addStudentData(student){
    let idElem = document.getElementById('id')
    idElem.innerHTML = student.id
    let studentIdElem = document.getElementById('studentId')
    studentIdElem.innerHTML = student.studentId
    let nameElem = document.getElementById('name')
    nameElem.innerHTML =`${student.name} ${student.surname}`
    let gpaElem = document.getElementById('gpa')
    gpaElem.innerHTML = student.gpa
    let profileElem = document.getElementById('image')
    profileElem.setAttribute('src',student.image)

}

function onload(){
    fetch().then((response) => {
        return response.json()
    }).then(data = >){
        addStudentData(data)
    }

}


function addStudentToTable(index,student){
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.setAttribute('score','row')
    cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = `${student.name} ${student.surname}`
    row.appendChild(cell)
    cell = document.createElement('td')
    //cell.innerHTML = student.username
    let img =  document.createElement('img')
    img.setAttribute('src',student.imageLink)
    cell.appendChild(img)
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.gender
    row.appendChild(cell)
    tableBody.appendChild(row)
}

document.getElementById('searchButton').addEventListener('click',()=>){
    let id = document.getElementByI('inputText').value
    console.log(id)

    function onload(){
        fetch().then((response) => {
            return response.json()
        }).then(data = >){
            addStudentData(data)
        }
    
    }

}




function onAddStudentClick(){
    let student = {}
    student.name = document.getElementById('nameInput').value
    student.surname = document.getElementById('surnameInput').value
    student.studentId = document.getElementById('stundentIdInput').value
    student.gpa= document.getElementById('gpaInput').value
    student.image = document.getElementById('imageLinkInput').value
    addStudentToDB(student)
}

function showAllStudent(){
    fetch().then((response) => {
        return response.json()
    }).then(data => {
        addStudentList(data)
    })
}



function addStudentToDB(student)
{
    fetch(,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(student)
    }).then((response) => {
        if(response.status === 200){
            return response.json()
        }else{
            throw Error(response.statusText)
        }
    }).then(data => {
        
        showAllStudent()
    })
}