
//-------create a section-------
const main =document.getElementById('new')
const mainSection = document.createElement('section')

//------section to create a div-----
const div1 = document.createElement('div')
const div2 = document.createElement('div')
const div3 = document.createElement('div')
const div4 = document.createElement('div')
const div5 = document.createElement('div')
///-----div to create a paragraph tag------
const para1 = document.createElement('p')
const para2 = document.createElement('p')
const para3 = document.createElement('p')
const para4 = document.createElement('p')
const para5 = document.createElement('p')

//------paragraph tag to create a text-----
para1.innerText=('This is  paragraph 1')
para2.innerText=('This is  paragraph 2')
para3.innerText=('This is  paragraph 3')
para4.innerText=('This is  paragraph 4')
para5.innerText=('This is  paragraph 5')

//---paragraph add to div-----
mainSection.appendChild(div1)
div1.appendChild(para1)
mainSection.appendChild(div2)
div2.appendChild(para2)
mainSection.appendChild(div3)
div3.appendChild(para3)
mainSection.appendChild(div4)
div4.appendChild(para4)
mainSection.appendChild(div5)
div5.appendChild(para5)

//--- mainSection add to main tag-----

main.appendChild(mainSection)









//----add class name/id name create-------

const addNewClass = document.getElementById('new')

addNewClass.classList.add('mainClass')
console.log(addNewClass)