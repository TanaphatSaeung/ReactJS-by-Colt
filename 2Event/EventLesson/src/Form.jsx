function handleFormSubmit(e) {
    e.preventDefault()
    console.log(e);
    
    console.log('Submit the form!!');
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}