import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch'

const FdDetails = () => {

  const { id } = useParams();
  const history = useHistory();
  const {data:fd, error, isPending} = useFetch('http://localhost:8000/fds/' + id);

  const handleClick = (e) => {
    fetch('http://localhost:8000/fds/'+fd.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return ( 
    <div className="fd-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{ error }</div>}
      {fd && (
        <article>
          <h2>{fd.bankname}</h2>
          <p>Receipt No : {fd.receiptno}</p>
          <div>Name: {fd.firstname} {fd.lastname}</div>
          <p>Receipt No. : {fd.receiptno}</p>
          <p>Amount : {fd.amount}</p>
          <p>Period : {fd.period}</p>
          <p>Rate of Interest : {fd.interestrate}</p>
          <p>Expiry Date : {fd.expirydate}</p>

          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
   );
}
 
export default FdDetails;