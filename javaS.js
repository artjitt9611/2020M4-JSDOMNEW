
/*var student = {};
student.name = 'คุณลุง'
student.username = 'a@b.com'
student.gender = 'ชาย'

var student2 = {};
student2.name = 'คุณนาย'
student2.username = 'a@b.com'
student2.gender = 'หญิง'

var students = [
    student,
    student2,

    {
        name : 'สมรักษ์',
        username : 'm@n.com',
        gender : 'ชาย'
    }
]*/

//document.getElementById('output').innerText = student;



/*function addStudentData(student){
    const output = document.getElementById('output')
    let row = document.createElement('div')
    row.classList.add("row")
    let columnName = document.createElement('div')
    columnName.classList.add("col-1")
    columnName.classList.add("offset-1")
    columnName.innerHTML = 'ชื่อ'
    let columnValue = document.createElement('div')
    columnValue = document.createElement('row')
    columnValue.classList.add('col')
    columnValue.innerHTML = student.name;
    row.appendChild(columnName)
    row.appendChild(columnValue)
    output.appendChild(row)

   
    row = document.createElement('div')
    row.classList.add("row")
    columnName = document.createElement('div')
    columnName.classList.add("col-1")
    columnName.classList.add("offset-1")
    columnName.innerHTML = 'รหัส'
    columnValue = document.createElement('div')
    columnValue = document.createElement('row')
    columnValue.classList.add('col')
    columnValue.innerHTML = student.username;
    row.appendChild(columnName)
    row.appendChild(columnValue)
    output.appendChild(row)

  
    row = document.createElement('div')
    row.classList.add("row")
    columnName = document.createElement('div')
    columnName.classList.add("col-1")
    columnName.classList.add("offset-1")
    columnName.innerHTML = 'เพศ'
    columnValue = document.createElement('div')
    columnValue = document.createElement('row')
    columnValue.classList.add('col')
    columnValue.innerHTML = student.gender;
    row.appendChild(columnName)
    row.appendChild(columnValue)
    output.appendChild(row)
}*/



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
    tableBody.appendChild(row)
}

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

document.getElementById('searchButton').addEventListener('click',()=>{
    let id = document.getElementById('inputText').value
    console.log(id)
        fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`)
        .then(response => {
            return response.json()
        }).then(student =>{
            addStudentData(student)
        })
    
    })


/*function onLoad(){
    fetch('https://dv-student-backend-2019.appspot.com/students')
    .then((response) => {
        return response.json()
    }).then(data =>{
        addStudentList(data)
    })

}*/

function onLoad(){
   student = {
       name:"John",
       surname:"Doe",
       studentId:"632110336",
       gpa:"4.00",
       image:"asset/images/Inosuke.png"
   }
   addStudentToDB(student)
   Deletestudent(4)

}

/*function Deletestudent(id){
    fetch(`https://dv-student-backend-2019.appspot.com/students/${id}`,{
        method: 'DELETE'
    }).then((response) => {
        if(response.status === 200){
            return response.json()
        }else{
            throw Error(response.statusText)
        }
    }).then(data => {
        alert(`student name ${data.name} is delete now`)
    
    }).catch( error => {
        alert('erorr ไอ้ควาย')

    })
}*/


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
        console.log('success',data)
    
    })
}

function addStudentList(studentList){
    let counter = 1
    for(student of studentList ){
        addStudentToTable(counter++,student)

    }
}


/*function onLoad(){ // ver ดึงข้อมูลมาจากไพล์ที่เราเก็บไม่ไว้ ไม่ใช่จาก API
    fetch('asset/students2.json').then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
        let student = data
        addStudentList(student)

    })
   

}*/


/*window.addEventListener("load",function(){
         
      addStudentList(students)

})/*

function addStudentList(studentList){
    let counter = 1
    for(student of studentList ){
        addStudentToTable(counter++,student)

    }
}

/*window.addEventListener("load",function(){
    addStudentData(student)
    addStudentData(student2)
})*/





/*var searchButton = document.getElementById('searchButton')
 var inputText = document.getElementById('inputText')
 var output = document.getElementById('output')
 var badgeCount = document.getElementById('count')
 function addText(){
     let text = inputText.value
    console.log(text)
    let newButton = document.createElement('button')
    newButton.classList.add('btn')
    newButton.classList.add('btn-outline-primary')
    newButton.classList.add('m-2')
    newButton.setAttribute('type','button')
     output.appendChild(newButton)
    badgeCount.innerText = output.children.length
}*/

/* searchButton.addEventListener('click',addText)
inputText.addEventListener('blur',addText)

var inputName = document.getElementById('name')
 var inputUsername = document.getElementById('username')
 var inputNamePrefix = document.getElementById('namePrefix')
var outputTableBody = document.getElementById('outputTableBody')
 var submitData = document.getElementById('submitData')

function addDataToTable(index){
     let row = document.createElement('tr')
    let cell = document.createElement('th')
     cell.setAttribute('score',row)
   cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = inputName.value
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = inputUsername.value
    row.appendChild(cell)
    cell = document.createElement('td')
     cell.innerHTML = inputNamePrefix.options[inputNamePrefix.selectedIndex].text
    outputTableBody.appendChild(row)
 }
 var index = 1
submitData.addEventListener('click',(event)=>{
        
     addDataToTable(index++)
    
 })*/