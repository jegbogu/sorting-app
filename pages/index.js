import {  useState} from 'react';
import data from '../pages/api/countryData.json'
import { DataGrid } from '@mui/x-data-grid';
import classes from './index.module.css'
 

 

const Home = () => {
  const[hasStates, setHasStates] = useState('true')
  const[continent,setContinent] = useState('AS')
   const[rows, setRows] = useState([])
   const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nameUn', headerName: 'NAMEUN', width: 170 },
    {field: 'hasStates', headerName:'HAS STATE', width:170}
    ]
    
    

      const submitHandler = (event)=>{
        event.preventDefault()
         
        
        let output = {
          continent, hasStates
        }
        function boolState(hasStates){
          if (hasStates=='true'){
            return true
          }else{return false}
        }
        
        console.log(output)
        console.log(hasStates)
     
        { const tot = data.countries.filter((el)=>(el.continent===continent&&el.hasStates===boolState(hasStates))) 
          console.log(tot)
          setRows(tot)
        }
       
        }
        const continentList = [ ... new Set(data.countries.map((el)=>{
          return el.continent
        }))]
        const continentKey = [ ... new Set(data.countries.map((el)=>{
          return el.id
        }))]
        
     return ( 
   <div className={classes.main}>
      <form onSubmit={submitHandler} className={classes.form}>
                 <div>
                    <label htmlFor='continent' className={classes.label}>Continent</label><br/>
                    <select value={continent} onChange={(e)=>setContinent(e.target.value)} className={classes.select}>
                    {continentList.map((el , index)=>{
                          return(
                          <option key={index}>{el}</option>
                           )})}

                  </select>
                </div>
                <div>
                <select value={hasStates} onChange={(e)=>setHasStates(e.target.value)} className={classes.select}>
                  <option value='true'>hasStates | true</option>
                  <option value='false'>hasStates | false</option>
                  
                </select>
                 
                </div>
               <div>
                    <button className={classes.button}>Submit</button>
                </div>
              </form>
      
    
       
      <div style={{ height: 400, width: '50%', backgroundColor: 'white' }} className={classes.table}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        
      />
       </div>
     
    </div>
   );
}
 
export default Home;