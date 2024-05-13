import "./Whitepaper.css"
// import paper from "../../../public/paper.png"

const Whitepaper = () => {

    const handleDownload = () => {
        const filePath = 'https://drive.google.com/file/d/1FTqH52Dfqa1db7cOtqCdtAEyYkqWtakM/view?usp=sharing';
        const link = document.createElement('a');
        link.href = filePath;
        link.target = "_blank";
        link.setAttribute('download', 'BitBhoomi White Paper.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="paperContainer">
            <h1 className="paperTitle">BitBhoomi White Paper</h1>
            <div className="paper">
                <img src="/paper.png" alt="BitBhoomi_white_paper" />
            </div>
            <div className="downloadBtnDiv">
                <button className="downloadBtn" onClick={handleDownload}>
                    Download
                    <img src="/download.png" alt="download_icon" />
                </button>
            </div>
        </div>
    )
}

export default Whitepaper