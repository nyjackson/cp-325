function Form(){
// Form store? 
function handleForm(e){
e.preventDefault()
console.log(e)

}
return(<form onSubmit = {handleForm}>
<label for = "fname">First Name: </label>
<input type="text" id="fname" name="fname" placeholder = "Bob"/><br></br>

<label for = "lname">Last Name: </label>
<input type="text" id="lname" name="lname" placeholder = "Bobberton"/><br></br>

<label for = "lname">Last Name: </label>
<input type="text" id="lname" name="lname" placeholder = "Bobberton"/><br></br>
</form>)
}

export default Form