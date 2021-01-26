import "./styles.css";
import { bigram } from './bigram.js'; //Import bigram() function from bigram.js file;
import { writeFile } from './writeFile.js';//Import writeFile() function from writeFile.js file;

/*Pass readFile() function for event listener*/
document.getElementById("inputFileId").addEventListener("change",readFile);


// console.log( writeFile({
//   "the quick": 2,
//   "quick brown": 1,
//   "brown fox": 1,
//   "fox and": 1,
//   "and the": 1,
//   "quick blue": 1,
//   "blue hare": 1
//
// }));
function readFile(){
  let inputText = new FileReader();

  /*Target ul by class name*/
  let output = document.querySelector('.output')

  inputText.onload = function () {
    /*Get proper data based on two functions "bigram()" and "writeFile()" and insert list of data into "ul"*/
    output.innerHTML =  writeFile(bigram(inputText.result));
  };
  /*Show uploaded file name next to the "chose file button" on browser*/
   inputText.readAsText(this.files[0]);
}

//the quick brown fox and the quick blue hare
