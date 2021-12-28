import "./App.css";
import Card from "./components/Card";
import Chart from "./components/Chart";

const divStyle = {
  color: "orange",
};
const divStyle1 = {
  color: "gray",
};
const divStyle2 = {
  color: "teal",
};
function App() {
  return (
    <>
      <div className="container">
        <div className="dashboard">
          <div className="year-ending">
            <span>Year Ending</span>
            <select>
              <option selected>VASY</option>
            </select>
          </div>
          <div className="cards">
            <Card
              CardText="Total Customers"
              CardNum="1343"
              CardText1="New Customers"
              CardNum1="218"
            ></Card>
            <Card
              CardText="No.of Products"
              CardNum="7556"
              CardText1="New Products"
              CardNum1="4095"
              Styled={divStyle}
            />
            <Card
              CardText="Total Income"
              CardNum="78,536,53"
              CardText1="vs Previous Month"
              CardNum1="27.3%"
              Styled={divStyle1}
            />
            <Card />
          </div>
          <div className="cards">
            <Card
              CardText="No.of Suppliers"
              CardNum="1006"
              CardText1="New Suppliers"
              CardNum1="106"
              Styled={divStyle2}
            />
            <Card
              CardText="Stock in Amount"
              CardNum="-2"
              CardText1="Stock in Qty"
              CardNum1="555678"
            />
            <Card
              CardText="Net Profit"
              CardNum="0"
              CardText1="vs Previous Month"
              CardNum1=""
            />
            <Card
              CardText="Cash in Hand"
              CardNum="1.03 L"
              CardText1="Bank Accounts"
              CardNum1="-128.79 C"
              Styled={divStyle2}
            />
          </div>
          <Chart/>
        </div>
      </div>
    </>
  );
}

export default App;
