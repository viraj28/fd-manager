import FdList from "./FdList";
import useFetch from "./useFetch";

const Home = () => {

  const {data: fds, isPending, error} = useFetch('http://localhost:8000/fds');
  

  return ( 
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div> Loading...</div>}
      {fds && <FdList fds = {fds} title="All fds!" /> }
      
    </div> 
   );
}
 
export default Home;