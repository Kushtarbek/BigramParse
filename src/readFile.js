

export const readFile = () =>{
  let reader = new FileReader();
  let output = document.querySelector('.output')
  reader.onload = function () {

    output.innerText =  writeFile(bigram(reader.result))
  };
   reader.readAsText(this.files[0]);
}
