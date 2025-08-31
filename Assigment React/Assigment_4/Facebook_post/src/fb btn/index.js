import { AiOutlineLike,AiOutlineMessage, } from "react-icons/ai"; 
import { FaShare } from "react-icons/fa"
function Fbbtns ()
{

    return <div className="fb-btn-div">
        
        < button className="fa-btn"><AiOutlineLike /> Like</button>
        < button className="fa-btn"><AiOutlineMessage/> Comments</button >
        < button className="fa-btn"><FaShare /> Share</button>
        


    </div>
}


export default Fbbtns