import React,{useState} from 'react'
import './UserCard.css'
import CircularProgress from '@material-ui/core/CircularProgress';


function UserCard() {

    const [detail,setDetail] = useState([]);
    const [detail_two,setDetail_two] = useState([]);
    const [isLoading,setLoading] = useState(false);

    const getApi = () => {
        setLoading(true);

        fetch('https://reqres.in/api/users?page=1')
        .then((response) => response.json())
        .then((json) => {
            console.log(json.data);
            setDetail(json.data);
        })

        fetch('https://reqres.in/api/users?page=2')
        .then((response) => response.json())
        .then((json) => {
            console.log(json.data);
            setDetail_two(json.data);
        })

        setTimeout( () => {
            setLoading(false);
        },500)
      
    }

    return (
        <div className="UserCard">
            
            <header>
                <a href="#" class="logo"> Zippy</a>
            </header>

            <h1>Employee Details</h1>

           {isLoading ? "" : ( <button onClick={getApi} >Get Details</button> )}

           {isLoading ? <div> <h1><CircularProgress color="secondary" />Loading ...</h1></div> : ''}
            

            <div className="card-container">

                <div className="card">
                          
                            {
                                detail.map( item => {
                                    return(
                                    <div className="user-profile"> 
                                        
                                        <div className="image"><img src={item.avatar} alt="User-Image"></img></div>
                                        
                                        <p><b>ID : </b>{item.id} </p>
                                        <p><b>First Name : </b>{item.first_name} </p>
                                        <p><b>Last Name : </b>{item.last_name} </p>
                                        <p><b>Email : </b>{item.email} </p>
                                    </div>
                                    )  })
                            }

                            {
                                detail_two.map( item => {
                                    return(
                                    <div className="user-profile"> 
                                        
                                        <div className="image"><img src={item.avatar} alt="User-Image"></img></div>
                                        
                                        <p><b>ID : </b>{item.id} </p>
                                        <p><b>First Name : </b>{item.first_name} </p>
                                        <p><b>Last Name : </b>{item.last_name} </p>
                                        <p><b>Email : </b>{item.email} </p>
                                    </div>
                                    )  })
                            }
                    
                </div>

            </div>
          

        </div>
    )


}

export default UserCard
