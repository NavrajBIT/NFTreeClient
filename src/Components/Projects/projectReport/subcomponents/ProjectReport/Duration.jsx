import './Charts.css'
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Duration = () => {
    const API_URL = import.meta.env.VITE_BACKEND_URL;

    const [projectReportData, setProjectReportData] = useState({}); // Initialize with an empty object
    const [selectedDuration, setSelectedDuration] = useState('')
    const dates = projectReportData.co2_equivalent || [];
    const durationSdates = dates.map((item) => item.start_date);
    const durationEdates = dates.map((item) => item.end_date)
    const location = useLocation();
    const path = location.pathname
    const paths = path.split("/")
    const projectId = paths[2];
    // const navigate = useNavigate();


    const handleDurationChange = (event) => {
        setSelectedDuration(event.target.value);
    };



    useEffect(() => {
        // const navbar = document.querySelector(".navbarcontainer");
        // if (navbar) {
        //     navbar.style.backgroundColor ="green";

        // }
    
        const fetchReportData = async () => {
            try {
                const response = await fetch(
                    `${API_URL}project/project-report/${projectId}/`
                );
                const res = await response.json();
                setProjectReportData(res[0]);
                const initialDuration = res[0]?.co2_equivalent[0]?.start_date + " to " + res[0]?.co2_equivalent[0]?.end_date;
                setSelectedDuration(initialDuration);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };

        fetchReportData();
    }, [API_URL, projectId]);


    const durationOptions = durationSdates.map((startDate, index) => {
        const endDate = durationEdates[index];
        const durationRange = `${startDate} to ${endDate}`;
        return (
            <option key={index} value={durationRange}>{durationRange}</option>
        );
    });


    return (
        <div
      style={{
        minHeight: "var(--min-height-page)",
        width: "100vw",
        background: "var(--bg-bright)",
      }}
    >
         <div
        style={{
          width: "100%",
          height: "var(--nav-height)",
          backgroundImage: "linear-gradient(170deg, #1B2F2F, #224629)",
        }}
      />
        <div className="duration">
        
            <div className='durationBox'>
                <div className='Ddates'>
                    <h3>Select The Timeline:</h3>
                    <div className='wrapper'>
                        <select value={selectedDuration} onChange={handleDurationChange} defaultValue=''>
                            {durationOptions}
                        </select>
                    </div>
                </div>
                <div className='getReport'>
                    <Link
                      to={{
                          pathname: `/projects/${projectId}/report/`,
                          search: `?duration=${encodeURIComponent(selectedDuration)}`
                        }}>
                          <button>
                        Get Report
                        </button>
                    </Link>
                </div>
            </div>

      
        
        </div>
        </div>
    )
}

export default Duration;

