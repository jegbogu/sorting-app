import data from '../pages/api/countryData.json'
import {useRef} from 'react'

const FormComponent = () => {
    const submitHandler = (event)=>{
        event.preventDefault()
        const continent = conRef.current.value;
        const hasState = hasRef.current.value;
        const output = {
          continent, hasState
        }
        console.log(output)
        {const tot =data.countries.filter((el)=>el.hasStates&&el.continent===continent)
             {const nameUn = tot.map((el)=>el.nameUn)
             {const outPut = tot.map((el)=>el.hasStates)}}
             
          }
         }
    
    const conRef = useRef()
    const hasRef = useRef()
    return ( 
        <div>
            <form onSubmit={submitHandler}>
                 <div>
                    <label htmlFor='hasState'>Continent</label>
                    <select ref={conRef}>
                      {data.countries&&data.countries.map((el)=>{
                        return(
                          <option value={el.continent} key={el.id}>{el.continent}</option>
                        )
                      })}
                  </select>
                </div>
                <div>
                <label htmlFor='hasState'>Has State</label>
                    <select ref={hasRef}>
                       <option value={true} >True</option>
                    </select>
                </div>
               <div>
                    <button>Submit</button>
                </div>
              </form>
        </div>
     );
}
 
export default FormComponent;