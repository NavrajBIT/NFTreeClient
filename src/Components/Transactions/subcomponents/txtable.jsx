import { useEffect, useState } from "react";

const Txtable = ({ usetx, isMobile }) => {
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

  let headers = [
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

  if (isMobile) {
    headers = ["TX ID", "Amount", "Date", "Payment", "Comment"];
  }

  function formatDateToLocal(dateString) {
    // Create a new Date object from the given date string
    let date = new Date(dateString);

    // Extract the day, month, and year from the date object
    let day = String(date.getDate()).padStart(2, "0"); // Pad with leading zero if necessary
    let month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
    let year = String(date.getFullYear()).slice(-2); // Get the last two digits of the year

    // Format the date as dd/mm/yy
    let formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }

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

          gridTemplateColumns: isMobile
            ? "3fr 1fr 2fr 1fr 3fr"
            : "3fr 2fr 4fr 1fr 1fr 2fr 1fr 1fr 1fr 3fr",
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
        <div
          className="txTableRow"
          key={`tx-${txindex}`}
          style={{
            gridTemplateColumns: isMobile
              ? "3fr 1fr 2fr 1fr 3fr"
              : "3fr 2fr 4fr 1fr 1fr 2fr 1fr 1fr 1fr 3fr",
          }}
        >
          <div className="txTableCell">{tx.tx_id}</div>
          {!isMobile && <div className="txTableCell">{tx.name}</div>}
          {!isMobile && <div className="txTableCell">{tx.email}</div>}

          <div className="txTableCell">{tx.amount}</div>
          {!isMobile && <div className="txTableCell">{tx.trees_count}</div>}
          <div className="txTableCell">{formatDateToLocal(tx.date)}</div>
          <div className="txTableCell">
            <input
              type="checkbox"
              checked={tx.confirmed}
              onChange={(e) => {
                setHasChanged(true);
                usetx.setTransactions((prev) => {
                  let newTransaction = [...prev];
                  newTransaction.map((t, i) => {
                    if (t.id === tx.id) {
                      newTransaction[i] = {
                        ...tx,
                        confirmed: !newTransaction[i]["confirmed"],
                      };
                    }
                  });
                  return newTransaction;
                });
                usetx.setTransactionsInView((prev) => {
                  let newTransaction = [...prev];
                  newTransaction.map((t, i) => {
                    if (t.id === tx.id) {
                      newTransaction[i] = {
                        ...tx,
                        confirmed: !newTransaction[i]["confirmed"],
                      };
                    }
                  });
                  return newTransaction;
                });
              }}
            />
          </div>
          {!isMobile && (
            <div className="txTableCell">{tx.email_sent ? "Yes" : "No"}</div>
          )}
          {!isMobile && (
            <div className="txTableCell">{tx.is_minted ? "Yes" : "No"}</div>
          )}
          <div
            style={{
              width: "100%",
            }}
          >
            <input
              value={tx.comment}
              style={{
                outline: "none",
                border: "none",
                borderBottom: "1px solid rgba(0,0,0,0.2)",
                maxWidth: "100px",
              }}
              onChange={(e) => {
                setHasChanged(true);
                usetx.setTransactions((prev) => {
                  let newTransaction = [...prev];
                  newTransaction.map((t, i) => {
                    if (t.id === tx.id) {
                      newTransaction[i] = { ...tx, comment: e.target.value };
                    }
                  });
                  return newTransaction;
                });
                usetx.setTransactionsInView((prev) => {
                  let newTransaction = [...prev];
                  newTransaction.map((t, i) => {
                    if (t.id === tx.id) {
                      newTransaction[i] = { ...tx, comment: e.target.value };
                    }
                  });
                  return newTransaction;
                });
              }}
            />
          </div>
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
