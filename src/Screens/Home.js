import React ,{useEffect} from 'react';
import Header from '../CustomHeader/CustomHeader'
import {connect} from 'react-redux'

import {fetchUser}   from '../Redux/Action'

 function Home ({fetchUser ,userData}) {   
     useEffect (()=>{
        fetchUser()       
     },[])
    return (       
       <> 
       <Header/>
       {
       userData.length===0?
        (<h1>Check Network Connection!</h1>)  :
       <div>       
           <h1>USER LIST</h1>
           {
               userData.map(users => <p>{users.name}</p> )
           }
       </div>}
       </>
    )
}

const mapStateToProps = state =>{    
 return{    
   userData:state.users
   }
}
const mapDispatchToProps = dispatch =>{    
    return{    
     fetchUser:()=>dispatch(fetchUser())
      }
   }

export default connect (mapStateToProps,mapDispatchToProps) (Home);
