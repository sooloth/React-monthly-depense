import {useState,useEffect} from 'react'
import './form.css'
import { v4 as uuidv4 } from "uuid";
const Form=(props)=>{
    //useState
    console.log("Render form components")
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const[formValid,setFormValid] = useState(false)
    const inputTitle =(event)=>{
        setTitle(event.target.value)
    }
    const inputAmount =(event)=>{
        setAmount(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault()
        const itemData={
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }
    useEffect(()=>{
        const checkData = title.trim().length>0 && amount!==0
            setFormValid(checkData)
    },[title,amount])
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                   <label htmlFor="">ຊື່ລາຍການ</label>
                   <input type="text" placeholder="ປ້ອນຊື່ລາຍການ" onChange={inputTitle} value={title}/>
                </div> 
                <div className="form-control">
                   <label htmlFor="">ຈຳນວນເງິນ</label>
                   <input type="number" placeholder="(+ ລາຍຮັບ . - ລາຍຈ່າຍ)" onChange={inputAmount} value={amount}/>
                </div> 
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>ເພີ່ມຂໍ້ມູນ</button>
                </div>
            </form>
        </div>
    )

}
export default Form;