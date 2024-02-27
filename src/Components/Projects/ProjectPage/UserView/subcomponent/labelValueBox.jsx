const LabelValueBox = ({label,value}) =>{
    return(
        <div style={{display:"flex"}}>
                            <p style={{
                                width:"50%",
                                fontSize:"1.1rem",
                                fontWeight:"600"
                            }}>
                                {label}
                            </p>
                              <p style={{
                                width:"50%",
                                fontSize:"1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}>
                                {value}
                            </p>
     </div>
    )
}

export default LabelValueBox;