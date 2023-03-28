import Header from "../../components/Header/Header"

const AddPostView=({onInputChange,handleSubmit})=>{
    return(
        <>
        <Header addLink/>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>User Name:</label>
                 <input onChange={(e)=>onInputChange("user", e.target.value)} type="text" placeholder="Enter your user name"></input>
            </fieldset>
            <fieldset>
                <label>Title:</label>
                 <input onChange={(e)=>onInputChange("title", e.target.value)} type="text" placeholder="Enter subject title"></input>
            </fieldset>
            <fieldset>
                <label>Message:</label>
                 <textarea onChange={(e)=>onInputChange("text", e.target.value)} maxLength={"100"}/>
            </fieldset>

            <button type="submit">Send</button>
        </form>
        </>
    )
}


export default AddPostView;