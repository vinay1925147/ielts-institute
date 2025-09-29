import './Program.css';
import program1 from "../../assets/program-1.png"
import program2 from "../../assets/program-2.png"
import program3 from "../../assets/program-3.png"
import icon_1 from "../../assets/program-icon-1.png"
import icon_2 from "../../assets/program-icon-2.png"
import icon_3 from "../../assets/program-icon-3.png"
function Program() {
  return (
     <div className="programs  ">
        <div className="program">
            <img src={program1} alt="program-1" />
            <div className="caption">
                <img src={icon_1} alt="" />
                <p>UG</p>
            </div>
        </div>
         <div className="program">
            <img src={program2} alt="program-1" />
            <div className="caption">
                <img src={icon_2} alt="" />
                <p>UG</p>
            </div>
        </div>
         <div className="program">
            <img src={program3} alt="program-1" />
            <div className="caption">
                <img src={icon_3} alt="" />
                <p>UG</p>
            </div>
        </div>
        
       
    
     </div>
  )
}

export default Program;