const ProjectPageButton = ({text,icon}) => {
    return (
        <button className="progressBtn">
                    {text}
                    {icon&&<img src={icon} alt ={text}  style={{
                        marginLeft:"5px",
                        marginTop:"0px"
                    }}/>}
                </button>
    )
}

export default ProjectPageButton