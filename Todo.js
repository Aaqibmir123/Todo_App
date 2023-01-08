import { useState } from "react"
const Todo=()=>{
    const [data,setData]=useState('');
    const [ListData,SetListData]=useState([]);
  
    const UserInput=(e)=>{
        setData(e.target.value);
    }

    const AddEvent=()=>{
        SetListData((ListData)=>{
            let updateData=[...ListData,data];
            console.log(updateData);
            setData('');
            return updateData;
        })

    }
    const RemoveItem=(index)=>{
        const List=ListData.filter((ele,id)=>{
            if(index!=id){
                return;
            }
        })
        SetListData(List);
    }

        const reset=()=>{
            SetListData([]);
        }
    return(
        <div>
            <input type="text"  onChange={UserInput}  value={data}/>
            <button onClick={AddEvent}>Add</button>
            <p>Here is your data</p>
            {ListData!=[] && ListData.map((item,index)=>{
                return(
                    <>
                    <p key={index}>
                        {item}
                        <button onClick={()=>RemoveItem(index)}>remove</button>
                            {ListData.length > 2 &&<button onClick={reset}>Reset</button>}
                    </p>
                    </>
                )
            })}
        </div>
    )
}
export default Todo;