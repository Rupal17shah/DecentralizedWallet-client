import React, { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import axiosInst from "../services/api";

const Dashboard = () => {
  const { account } = useContext(DataContext);
  // console.log(account);
  const [data, setData] = React.useState(0);
  const [balance, setBalance] = React.useState(0);
  const [transactions, setTransactions] = React.useState([]);
  const [nodes, setNodes] = React.useState([]);

  useEffect(() => {
    const fetchNodes = async () => {
      try {
        const response = await axiosInst.get("/nodes", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        setNodes(response.data.users);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNodes();
  }, []);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axiosInst.get("/balance", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        setBalance(response.data.balance);
        // console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBalance();
  }, []);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axiosInst.get("/transactions", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        setTransactions(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTransactions();
  }, []);

  

  return (
    <>
      {/* <section className="body-bg">
        <div className="body-bg-screen"> */}
      <div className="container">
        <div className="navbar-dashboard">
          <Link
            className="dash-nav-links"
            onClick={() => {
              setData(0);
            }}
          >
            <div>My Account</div>
          </Link>
          <Link
            className="dash-nav-links"
            onClick={() => {
              setData(1);
            }}
          >
            <div>My Transactions</div>
          </Link>
          {account.role === "miner" ? (
            <Link
              className="dash-nav-links"
              onClick={() => {
                setData(2);
              }}
            >
              <div>Mine Infinity</div>
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div className="dashboard">
          {data === 0 ? (
            <>
              <div className="myaccount">
                <h1 className="my-account-heading">
                  Welcome aboard {account.name}!
                </h1>
                <div className="accountdetails">{account.role}</div>
                <div className="cont">
                  <div className="balance">
                    <h1 className="balance-heading">
                      {/* Balance */}

                      {/* <h1 className="num"> */}
                      {balance}
                      <span className="infinity">∞</span>
                      {/* </h1> */}
                    </h1>
                  </div>
                  <div className="transactions">
                    <h4 className="Transactions" style={{ margin: "auto" }}>
                      {transactions?.length === 0 ? (
                        "No Transactions Yet"
                      ) : (
                        <>djsfkhush</>
                      )}
                    </h4>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          {data === 1 ? (
            <>
              <div className="transact">
                <h1 className="my-account-heading">Make Transactions</h1>

                <div className="transaction">
                  <form action="">
                    <label for="nodes">
                      Send Money to: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      <select name="Nodes" id="nodes">
                        {nodes.map((node, key) => (
                          <option value={node.id}>{node.name}</option>
                        ))}
                      </select> 
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                  </form>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          {data === 2 ? <> Mine Infinity</> : <></>}
        </div>
      </div>
      {/* </div>
      </section> */}
    </>
  );
};

export default Dashboard;
