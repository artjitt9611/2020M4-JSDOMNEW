
var  student = {};
student.name = 'คุณลุง'
student.username = 'a@b.com'
student.gender = 'ชาย'

document.getElementById().innerText = student;

// var searchButton = document.getElementById('searchButton')
// var inputText = document.getElementById('inputText')
// var output = document.getElementById('output')
// var badgeCount = document.getElementById('count')
// function addText(){
//     let text = inputText.value
//     console.log(text)
//     let newButton = document.createElement('button')
//     newButton.classList.add('btn')
//     newButton.classList.add('btn-outline-primary')
//     newButton.classList.add('m-2')
//     newButton.setAttribute('type','button')
//     newButton.innerText = text
//     output.appendChild(newButton)
//     badgeCount.innerText = output.children.length
// }

// searchButton.addEventListener('click',addText)
// inputText.addEventListener('blur',addText)

// var inputName = document.getElementById('name')
// var inputUsername = document.getElementById('username')
// var inputNamePrefix = document.getElementById('namePrefix')
// var outputTableBody = document.getElementById('outputTableBody')
// var submitData = document.getElementById('submitData')

// function addDataToTable(index){
//     let row = document.createElement('tr')
//     let cell = document.createElement('th')
//     cell.setAttribute('score',row)
//     cell.innerHTML = index
//     row.appendChild(cell)
//     cell = document.createElement('td')
//     cell.innerHTML = inputName.value
//     row.appendChild(cell)
//     cell = document.createElement('td')
//     cell.innerHTML = inputUsername.value
//     row.appendChild(cell)
//     cell = document.createElement('td')
//     cell.innerHTML = inputNamePrefix.options[inputNamePrefix.selectedIndex].text
//     row.appendChild(cell)
//     outputTableBody.appendChild(row)
// }
// var index = 1
// submitData.addEventListener('click',(event)=>{
        
//     addDataToTable(index++)
    
// })