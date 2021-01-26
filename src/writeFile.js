

export const writeFile = (inputObj) =>{
  let str = '';
    for (let key in inputObj) {
      str += `<li>"${key}" ${inputObj[key]}</li>`
    }
    return str.length ? str : "File is empty";
}
