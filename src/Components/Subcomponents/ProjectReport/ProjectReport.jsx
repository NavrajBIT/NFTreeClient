'use client'
import BioChart from "./BioChart";
import CarbonChart from "./CarbonChart";
import "./ProjectReport.css"


const ProjectReport = () => {
    return (<>
        <h1>Project report</h1>
        <div className="reports">
            <div className="box1">
                <div className="boxContent1">
                    <h2>Enhancement in Bio diversity</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>PARAMETERS</th>
                                <th>ICON</th>
                                <th>VALUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Geolocation</td>
                                <td><img src="/ProjectReport/Geo.png" /></td>
                                <td>19.076° N to 72.877° E</td>
                            </tr>
                            <tr>
                                <td>Project Age</td>
                                <td><img src="/ProjectReport/PAge.png" /></td>
                                <td>6 Years</td>
                            </tr>
                            <tr>
                                <td>Land Covered</td>
                                <td><img src="/ProjectReport/Land.png" /></td>
                                <td>2 Acres</td>
                            </tr>
                            <tr>
                                <td>Total Trees Planted</td>
                                <td><img src="/ProjectReport/Trees.png" /></td>
                                <td>1500</td>
                            </tr>
                            <tr>
                                <td>Average Age</td>
                                <td><img src="/ProjectReport/AAge.png" /></td>
                                <td>6-8 Years</td>
                            </tr>
                            <tr>
                                <td>Biomass weight</td>
                                <td><img src="/ProjectReport/Biomass (1).png" /></td>
                                <td>3-5 Tonnes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="box1D1">
                    <BioChart />
                </div>
            </div>
            <div className="box2">
                <div className="boxContent2">
                    <h2>Carbon Sequestration</h2>
                </div>
                <div className="box2D2">
                    <CarbonChart/>
                </div>
            </div>
            <div className="box3">
                <div className="boxContent3">
                    <h2>Enhancement in Bio diversity</h2>
                </div>
                <div className="box3D3">
                    <CarbonChart />
                </div>
            </div>
            <div className="box4">
                <div className="boxContent4">
                    <h2>Enhancement in Bio diversity</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>SPECIES</th>
                                <th>AGE</th>
                                <th>TPES OF VEGETATION</th>
                                <th>ESTIMATED 20 Tr.GRG REMGAL RATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pitch Pine</td>
                                <td>6</td>
                                <td>Tropical Evergreen Forest</td>
                                <td>4.5to 40.7 t CO2/ha/yr</td>
                            </tr>
                            <tr>
                                <td>Coconut</td>
                                <td>7</td>
                                <td>Tropical Evergreen Forest</td>
                                <td>4.5to 40.7 t CO2/ha/yr</td>
                            </tr>
                            <tr>
                                <td>Mango</td>
                                <td>8</td>
                                <td>Tropical Evergreen Forest</td>
                                <td>4.5to 40.7 t CO2/ha/yr</td>
                            </tr>
                            <tr>
                                <td>species</td>
                                <td>6</td>
                                <td>Tropical Evergreen Forest</td>
                                <td>4.5to 40.7 t CO2/ha/yr</td>
                            </tr>
                            <tr>
                                <td>Species</td>
                                <td>5</td>
                                <td>Tropical Evergreen Forest</td>
                                <td>4.5to 40.7 t CO2/ha/yr</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
    )
}
export default ProjectReport;