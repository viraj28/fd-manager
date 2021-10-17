import { Link } from "react-router-dom";

const FdList = ({fds, title}) => {

  

  return ( 
    <div className="fd-list">
    <h2>{title}</h2>
      {fds.map((fd) => (
        <div className="fd-preview" key={fd.id}>
          <Link to={`/fds/${fd.id}`}>
            <h2>{fd.bankname}</h2>
            <p>Receipt No: {fd.receiptno}</p>
          </Link>
        </div>
      ))}
    </div>
   );
}
 
export default FdList;