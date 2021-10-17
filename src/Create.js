import { useState } from "react"
import { useHistory } from "react-router-dom";

const Create = () => {

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [bankname, setBankName] = useState('')
  const [receiptno, setReceiptNo] = useState('')
  const [amount, setAmount] = useState('')
  const [period, setPeriod] = useState('')
  const [interestrate, setInterestRate] = useState('')
  const [expirydate, setExpiryDate] = useState('')
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = { firstname, lastname,bankname,receiptno, amount, period, interestrate, expirydate };

    setIsPending(true);
    
    fetch('http://localhost:8000/fds', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(fd)
    }).then(()=>{
      console.log("New fd added")
      setIsPending(false);
      history.push('/');

    })
  } 

  return ( 
    <div className="create">
      <h2>Add a new FD</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input 
          type="text" 
          name="firstname" 
          id="" 
          value={firstname}
          onChange ={(e) => setFirstName(e.target.value)}
          required
        />
        <label>Last Name</label>
        <input 
          type="text" 
          name="lastname" 
          id="" 
          value={lastname}
          onChange ={(e) => setLastName(e.target.value)}
          required
        />
        <label>Bank Name</label>
        <input 
          type="text" 
          name="bankname" 
          id="" 
          value={bankname}
          onChange ={(e) => setBankName(e.target.value)}
          required
        />
        <label>Receipt Number</label>
        <input 
          type="number"
          name="receiptno" 
          id="" 
          value={receiptno}
          onChange ={(e) => setReceiptNo(e.target.value)}
          required
        />
        <label>Amount</label>
        <input 
          type="number" 
          name="amount" 
          id="" 
          value={amount}
          onChange ={(e) => setAmount(e.target.value)}
          required
        />
        <label>Period</label>
        <input 
          type="number" 
          name="period" 
          id="" 
          value={period}
          onChange ={(e) => setPeriod(e.target.value)}
          required
        />
        <label>Rate of Interest</label>
        <input 
          type="number" 
          name="interestrate" 
          id="" 
          value={interestrate}
          onChange ={(e) => setInterestRate(e.target.value)}
          required
        />
        <label>Expiry date</label>
        <input 
          type="date" 
          name="expirydate" 
          id="" 
          value={expirydate}
          onChange ={(e) => setExpiryDate(e.target.value)}
          required
        />
        {!isPending && <button>Add FD</button>}
        {isPending && <button disabled>Adding FD...</button>}

      </form>
    </div>
   );
}
 
export default Create; 