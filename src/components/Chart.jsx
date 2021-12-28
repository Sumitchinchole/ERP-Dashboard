import "./Chart.css";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";

const cdata = [
  {
    name: "10",
    amt: 100000,
  },
  {
    name: "11",
    amt: 0,
  },
  {
    name: "12",
    amt: 200000,
  },
  {
    name: "13",
    amt: 250000,
  },
  {
    name: "14",
    amt: 0,
  },
  {
    name: "15",
    amt: 200000,
  },
  {
    name: "16",
    amt: 1700000,
  },
  {
    name: "17",
    amt: 4400000,
  },
];

export default function Chart() {
  return (
    <div className="sales-summary">
      <div className="chart">
        <div className="heading">
          <span>Sales Summary</span>
          <select>
            <option selected>This Week</option>
          </select>
        </div>
        <hr />
        <div className="sales">
          <div className="sales-data">
            <span>Total sales</span>
            <div>
              <span> 2c </span>
            </div>
          </div>
          <div className="sales-data">
            <span>Lost Quarter</span>
            <div>
              <span> 2c </span>
            </div>
          </div>
          <div className="sales-data">
            <span>Last Month</span>
            <div>
              <span> 23.50L </span>
            </div>
          </div>
          <div className="sales-data">
            <span>Last Week</span>
            <div>
              <span> 64.84L </span>
            </div>
          </div>
        </div>
        <div className="chart-data">
          <div className="chart-title">
            <span
              style={{
                backgroundColor: "green",
                border: "1px solid black",
                width: "50px",
                height: "18px",
                marginRight: "10px",
              }}
            ></span>
            <span>Total Sales</span>
          </div>
          <div className="chart-show">
            <ResponsiveContainer width="100%" aspect={3}>
              <BarChart
                data={cdata}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="amt" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="customer">
        <div className="vip-custom">
          <span className="custome">8</span>
          <div>
            <span>VIP Customer</span>
          </div>
        </div>
        <div className="regular-custom">
          <span className="custome">10</span>
          <div>
            <span>Regular Customer</span>
          </div>
        </div>
        <div className="risk-custom">
          <span className="custome">27</span>
          <div>
            <span>Risk Customer</span>
          </div>
        </div>
        <div className="lost-custom">
          <span className="custome">1298</span>
          <div>
            <span>Lost Customer</span>
          </div>
        </div>
      </div>
      <div className="best-selling-products">
        <div className="heading">
          <span>Best Selling Products</span>
          <select>
            <option selected>All Time</option>
          </select>
        </div>
        <hr />
        <div className="products">
          <span style={{ color: "blue", fontWeight: "bold" }}>Abc</span>
          <span style={{ color: "blue", fontWeight: "bold" }}>785</span>
        </div>
        <div style={{ color: "gray" }}>Dry fruit</div>
        <hr />
        <div className="products">
          <span style={{ color: "blue", fontWeight: "bold" }}>Tuwar 1000</span>
          <span style={{ color: "blue", fontWeight: "bold" }}>555</span>
        </div>
        <div style={{ color: "gray" }}>Dry fruit</div>
        <hr />
        <div className="products">
          <span style={{ color: "blue", fontWeight: "bold" }}>MSM</span>
          <span style={{ color: "blue", fontWeight: "bold" }}>513</span>
        </div>
        <div style={{ color: "gray" }}>Dry fruit</div>
        <hr />
        <div className="products">
          <span style={{ color: "blue", fontWeight: "bold" }}>Jeans</span>
          <span style={{ color: "blue", fontWeight: "bold" }}>452</span>
        </div>
        <div style={{ color: "gray" }}>Footwear</div>
        <hr />
        <div className="products">
          <span style={{ color: "blue", fontWeight: "bold" }}>
            T-Shirt's / Black
          </span>
          <span style={{ color: "blue", fontWeight: "bold" }}>500</span>
        </div>
        <div style={{ color: "gray" }}>Clothing</div>
        <hr />
      </div>
    </div>
  );
}
