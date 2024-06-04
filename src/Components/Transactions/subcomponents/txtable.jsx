import { useEffect, useState } from "react";

const Txtable = ({ usetx }) => {
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    setHasChanged(false);
  }, [usetx.selectedProject]);

  if (!usetx.transactions) {
    return <div>No Transactions yet...</div>;
  }
  if (!usetx.transactionsInView || usetx?.transactionsInView?.length == 0) {
    return <div>No results found...</div>;
  }

  const headers = [
    "TX ID",
    "Name",
    "Email ID",
    "Amount",
    "Trees",
    "Date",
    "Payment",
    "Certificate",
    "NFT",
    "Comment",
  ];

  const transactionsToShow = usetx.transactionsInView.slice(
    (usetx.currentPage - 1) * 10,
    (usetx.currentPage - 1) * 10 + 10
  );

  return (
    <div>
      <h2>Project: {usetx?.selectedProject?.name}</h2>
      <div
        className="txTableRow"
        style={{
          background: "rgba(100,100,100,0.1)",
        }}
      >
        {headers.map((heading, index) => (
          <div
            style={{ fontWeight: "bold" }}
            key={`heading-${index}`}
            className="txTableCell"
          >
            {heading}
          </div>
        ))}
      </div>
      {transactionsToShow?.map((tx, txindex) => (
        <div className="txTableRow" key={`tx-${txindex}`}>
          <div className="txTableCell">{tx.tx_id}</div>
          <div className="txTableCell">{tx.name}</div>
          <div className="txTableCell">{tx.email}</div>
          <div className="txTableCell">{tx.amount}</div>
          <div className="txTableCell">{tx.trees_count}</div>
          <div className="txTableCell">{tx.date}</div>
          <div className="txTableCell">
            <input
              type="checkbox"
              checked={tx.confirmed}
              onChange={(e) => {
                setHasChanged(true);
                usetx.setTransactions((prev) => {
                  let newTransaction = [...prev];
                  let txIndex = usetx.transactions.indexOf(tx);
                  newTransaction[txIndex] = {
                    ...tx,
                    confirmed: !prev[txIndex].confirmed,
                  };
                  return newTransaction;
                });
              }}
            />
          </div>
          <div className="txTableCell">{tx.email_sent ? "Yes" : "No"}</div>
          <div className="txTableCell">{tx.is_minted ? "Yes" : "No"}</div>
          <input
            value={tx.comment}
            style={{
              outline: "none",
              border: "none",
              borderBottom: "1px solid rgba(0,0,0,0.2)",
            }}
            onChange={(e) => {
              setHasChanged(true);
              usetx.setTransactions((prev) => {
                let newTransaction = [...prev];
                let txIndex = usetx.transactions.indexOf(tx);
                newTransaction[txIndex] = { ...tx, comment: e.target.value };
                return newTransaction;
              });
            }}
          />
        </div>
      ))}
      {hasChanged && (
        <button
          onClick={usetx.changeValue}
          style={{
            background: "var(--green-100)",
            margin: "var(--padding-main)",
            padding: "var(--padding-main)",
            borderRadius: "var(--padding-main)",
          }}
        >
          Save Changes
        </button>
      )}
    </div>
  );
};

export default Txtable;
