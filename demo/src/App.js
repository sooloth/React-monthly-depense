import "./App.css";
import "./components/transaction.css";
import Form from "./components/form";
import Transaction from "./components/transaction";
import { useState, useEffect, useReducer } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./data/ReportComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// const Description = () => <p>ບັນທຶກຂໍ້ມູນບັນຊີແຕ່ລະວັນ</p>;

function App() {
  const design = { color: "red", fontSize: "18px", textAlign: "center" };
  const initState = [
    { id: 1, title: "ຄ່າຫ້ອງ", amount: -500000 },
    { id: 2, title: "ເງິນເດືອນ", amount: 5000000 },
    { id: 3, title: "ຄ່າລົດ", amount: -1500000 },
    { id: 4, title: "ຊື້ກິນ", amount: -2500000 },
  ];
  const [items, setItems] = useState(initState);

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    console.log(amounts);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1;
    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2));
  }, [items, reportIncome, reportExpense]);

  //reducer state
  // const [showReport, setShowReport] = useState(false);
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShowReport(true);
  //     case "HIDE":
  //       return setShowReport(false);
  //   }
  // };
  // const [result, dispatch] = useReducer(reducer, showReport);
  return (
    // Context API

    <DataContext.Provider
      value={{ income: reportIncome, expense: reportExpense }}
    >
      <div className="container">
        <h1 style={design}>ບັນຊີລາຍຮັບ - ລາຍຈ່າຍ</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ຂໍ້ມູນບັນຊີ</Link>
              </li>
              <li>
                <Link to="/insert">ບັນທຶກຂໍ້ມູນ</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/" exact>
                <ReportComponent />
              </Route>
              <Route path="/insert">
                <Form onAddItem={onAddNewItem} />
                <Transaction items={items} />
              </Route>
            </Switch>
          </div>
        </Router>

        {/* <h1>{result}</h1>
        <button onClick={() => dispatch({ type: "SHOW", payload: 10 })}>
          ສະແດງ
        </button>
        <button onClick={() => dispatch({ type: "HIDE", payload: 5 })}>
          ເຊື່ອງ
        </button> */}
        {/* <button onClick={() => dispatch({ type: "REFRESH" })}>ລ້າງ</button> */}
      </div>
    </DataContext.Provider>
  );
}
export default App;
