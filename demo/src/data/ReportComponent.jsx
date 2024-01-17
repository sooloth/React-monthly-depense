import { useContext } from "react";
import DataContext from './DataContext'
import "../components/reportcomponent.css"
const ReportComponent=()=>{
    const {income,expense} = useContext(DataContext)
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
    return (
        <div>
            <h1>ຍອດເງິນຍັງເຫຼືອ (ກີບ)</h1>
            <h1 className="total">{formatNumber((income-expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>ລາຍຮັບ</h4>
                    <p className="report plus">{formatNumber(income)}</p>
                </div>
                <div>
                <h4>ລາຍຈ່າຍ</h4>
                    <p className="report minus">{formatNumber(expense)}</p>
                </div>
            </div>
            
        </div>
    )
}

export default ReportComponent;