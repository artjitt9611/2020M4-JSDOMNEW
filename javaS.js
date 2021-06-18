

function addStudentList(studentList){
    let counter = 1
    document.getElementById('tableBody').innerHTML =''
    for(student of studentList ){
        addStudentToTable(counter++,student)

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
    img.setAttribute('src',student.image)
    img.height = 200
    img.classList.add('img-thumbnail')
    cell.appendChild(img)
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.gender
    row.appendChild(cell)


    cell = document.createElement('td')
    let button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add('btn-danger')
    button.setAttribute('type','button')
    button.innerText="ลบ"
    button.addEventListener('click',function () {
        let con = confirm(`ท่านต้องการลบ  ${student.name} จริงๆหรือไม่`)
        if(con == true){
            DeleteStudent(student.id)
        }else{

        }
       

    })
    cell.appendChild(button)
    row.appendChild(cell)
    tableBody.appendChild(row)
}



document.getElementById('searchButton').addEventListener('click',()=>{
    let id = document.getElementById('inputText').value
    console.log(id)
        fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`)
        .then(response => {
            return response.json()
        }).then(student =>{
            HideAll()
            addStudentData(student)
            SingleStudentResult.style.display = 'block'
        })
    
    })

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
    

    function showAllStudent(){
        fetch('https://dv-student-backend-2019.appspot.com/students').then((response) => {
            return response.json()
        }).then(data => {
            addStudentList(data)
        })
    }
    

    function OnAddStudentClick(){
        let student = {}
            student.name = document.getElementById('nameInput').value
            student.surname = document.getElementById('surnameInput').value
            student.studentId = document.getElementById('studentIdInput').value
            student.gpa = document.getElementById('gpaInput').value
            student.image = document.getElementById('imageLinkInput').value     
            addStudentToDB(student)

    }

document.getElementById('addButton').addEventListener('click',() =>{
    OnAddStudentClick()

})


function addStudentToDB(student)
{
    fetch('https://dv-student-backend-2019.appspot.com/students',{
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


function DeleteStudent(id){
    fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`,{
        method: 'DELETE'
    }).then((response) => {
        if(response.status === 200){
            return response.json()
        }else{
            throw Error(response.statusText)
        }
    }).then(data => {
        alert(`student name ${data.name} is delete now`)
        showAllStudent()
    
    }).catch( () => {
        alert('erorr ไอ้ควาย')

    })
}

var SingleStudentResult = document.getElementById('single_student_result')
var ListStudentResult = document.getElementById('output')
var UserDetail = document.getElementById('UserDetail')

function HideAll(){
    SingleStudentResult.style.display = 'none'
    ListStudentResult.style.display = 'none'
    UserDetail.style.display = 'none'

}


function OnLoad(){

    HideAll()

}

document.getElementById('1').addEventListener('click', ()=>{
    HideAll()
   ListStudentResult.style.display = 'block'
    showAllStudent()
})
document.getElementById('3').addEventListener('click', ()=>{
    HideAll()
   UserDetail.style.display = 'block'
 })
