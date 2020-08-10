import React  from 'react';
import './App.css'
import Home from './Screens/Home';
import store from './Redux/Store'
import {Provider} from 'react-redux'
//  API DATA == https://jsonplaceholder.typicode.com/users
 function App() {
   return(     
    <Provider store= {store}>
     <div className='Apps'>
      <Home />
     </div>
    </Provider>                                                        
         
   )
}
export default App;