import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

export default function StockModal({ show, setShow, id }) {
  const [data, setData] = useState([]);
  const [read, setRead] = useState(0);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://dummy-wireframe.iecsemanipal.com/stock/" + id + "?apikey=wzo04y8hhu9fqcqrda1ib8",
    }).then((res) => {
      console.log(res.data);
      console.log("HI?");
      setData(res.data.data);
    });
  }, [id]);
  return (
    <div style={show ? { display: "flex" } : { display: "none" }} className="modal-container stock-modal">
      <div className="bg-svg">
        <svg width="2216" height="1189" viewBox="0 0 2216 1189" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.5 1185L288.5 908L388 976L555 746L678 824.5L808.5 636.5L960 850.5L1080.5 636.5L1166.5 746L1258 479.5L1373 584L1501 378L1647.5 560.5L1733.5 422L1861.5 323L1961 422L2050 184.5L2076 218.5L2149 72L2212 4"
            stroke="#f0473e"
            strokeWidth="5"
          />
          <circle cx="287.5" cy="912.5" r="22.5" stroke="#f0473e" strokeWidth="5" />
          <circle cx="554.5" cy="750.5" r="22.5" stroke="#f0473e" strokeWidth="5" />
          <circle cx="807.5" cy="638.5" r="22.5" stroke="#f0473e" strokeWidth="5" />
          <circle cx="1080.5" cy="638.5" r="22.5" stroke="#f0473e" strokeWidth="5" />
          <circle cx="1256.5" cy="479.5" r="22.5" stroke="#f0473e" strokeWidth="5" />
          <circle cx="1499.5" cy="380.5" r="22.5" stroke="#f0473e" strokeWidth="5" />
          <circle cx="1857.5" cy="325.5" r="22.5" stroke="#f0473e" strokeWidth="5" />
          <circle cx="1731.5" cy="421.5" r="22.5" stroke="#f0473e" strokeWidth="5" />
          <circle cx="2047.5" cy="181.5" r="22.5" stroke="#f0473e" strokeWidth="5" />
          <circle cx="2141.5" cy="71.5" r="22.5" stroke="#f0473e" strokeWidth="5" />
        </svg>
      </div>
      <button
        className="cancel-btn"
        onClick={() => {
          setShow(!show);
          setData("");
        }}
      >
        <FaTimes />
        Close
      </button>
      <div className="modal-card">
        {data.Address ? (
          <>
            <div className="stock-details">
              <h1>{data.Symbol}</h1>
              <h3> {data.Name}</h3>
              <h5>{data.Address}</h5>
              <p className="text-muted">
                {!read ? data.Description.slice(0, 150) : data.Description}...
                <span className="red-text" onClick={() => setRead(!read)}>
                  {!read ? "Read More" : "Collapse"}
                </span>
              </p>
            </div>
            <div className="others">
              <h4 style={{ paddingBottom: "1rem" }}>Data Table</h4>
              <table>
                <tr>
                  <th>Asset Type</th>
                  <th>CIK</th>
                  <th>Exchange</th>
                  <th>Currency</th>
                  <th>Country</th>
                  <th>Sector</th>
                  <th>Industry</th>
                  <th>Employees</th>
                  <th>Fiscal Year End</th>
                  <th>Latest Quarter</th>
                  <th>Market Capitalization</th>
                  <th>EBITDA</th>
                  <th>PERatio</th>
                  <th>PEGRatio</th>
                  <th>Book Value</th>
                  <th>Dividend Per Share</th>
                  <th>Dividend Yield</th>
                  <th>EPS</th>
                  <th>Revenue Per Share TTM</th>
                  <th>ProfitMargin</th>
                  <th>Operating Margin TTM</th>
                  <th>Return On Assets TTM</th>
                  <th>Return On Equity TTM</th>
                  <th>Revenue TTM</th>
                  <th>Gross Profit TTM</th>
                  <th>Diluted EPSTTM</th>
                  <th>Quarterly Earnings Growth YOY</th>
                  <th>Quarterly Revenue Growth YOY</th>
                  <th>Analyst Target Price</th>
                  <th>Trailing PE</th>
                  <th>Forward PE</th>
                  <th>PriceToSalesRatio TTM</th>
                  <th>Price To Book Ratio</th>
                  <th>EV To Revenue</th>
                  <th>EV To EBITDA</th>
                  <th>Beta</th>
                  <th>Shares Outstanding</th>
                  <th>Shares Float</th>
                  <th>Shares Short</th>
                  <th>Shares Short Prior Month</th>
                  <th>Short Ratio</th>
                  <th>Short Percent Outstanding</th>
                  <th>Short Percent Float</th>
                  <th>Percent Insiders</th>
                  <th>Percent Institutions</th>
                  <th>Forward Annual Dividend Rate</th>
                  <th>Forward Annual Dividend Yield</th>
                  <th>Payout Ratio</th>
                  <th>Dividend Date</th>
                  <th>Last Split Factor</th>
                  <th>Last Split Date</th>
                </tr>
                <tr>
                  <td>{data.AssetType}</td>
                  <td>{data.CIK}</td>
                  <td>{data.Exchange}</td>
                  <td>{data.Currency}</td>
                  <td>{data.Country}</td>
                  <td>{data.Sector}</td>
                  <td>{data.Industry}</td>
                  <td>{data.FullTimeEmployees}</td>
                  <td>{data.FiscalYearEnd}</td>
                  <td>{data.LatestQuarter}</td>
                  <td>{data.MarketCapitalization}</td>
                  <td>{data.EBITDA}</td>
                  <td>{data.PERatio}</td>
                  <td>{data.PEGRatio}</td>
                  <td>{data.BookValue}</td>
                  <td>{data.DividendPerShare}</td>
                  <td>{data.DividendYield}</td>
                  <td>{data.EPS}</td>
                  <td>{data.RevenuePerShareTTM}</td>
                  <td>{data.ProfitMargin}</td>
                  <td>{data.OperatingMarginTTM}</td>
                  <td>{data.ReturnOnAssetsTTM}</td>
                  <td>{data.ReturnOnEquityTTM}</td>
                  <td>{data.RevenueTTM}</td>
                  <td>{data.GrossProfitTTM}</td>
                  <td>{data.DilutedEPSTTM}</td>
                  <td>{data.QuarterlyEarningsGrowthYOY}</td>
                  <td>{data.QuarterlyRevenueGrowthYOY}</td>
                  <td>{data.AnalystTargetPrice}</td>
                  <td>{data.TrailingPE}</td>
                  <td>{data.ForwardPE}</td>
                  <td>{data.PriceToSalesRatioTTM}</td>
                  <td>{data.PriceToBookRatio}</td>
                  <td>{data.EVToRevenue}</td>
                  <td>{data.EVToEBITDA}</td>
                  <td>{data.Beta}</td>
                  <td>{data.SharesOutstanding}</td>
                  <td>{data.SharesFloat}</td>
                  <td>{data.SharesShort}</td>
                  <td>{data.SharesShortPriorMonth}</td>
                  <td>{data.ShortRatio}</td>
                  <td>{data.ShortPercentOutstanding}</td>
                  <td>{data.ShortPercentFloat}</td>
                  <td>{data.PercentInsiders}</td>
                  <td>{data.PercentInstitutions}</td>
                  <td>{data.ForwardAnnualDividendRate}</td>
                  <td>{data.ForwardAnnualDividendYield}</td>
                  <td>{data.PayoutRatio}</td>
                  <td>{data.DividendDate}</td>
                  <td>{data.LastSplitFactor}</td>
                  <td>{data.LastSplitDate}</td>
                </tr>
              </table>
            </div>
          </>
        ) : (
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        )}
      </div>
    </div>
  );
}
