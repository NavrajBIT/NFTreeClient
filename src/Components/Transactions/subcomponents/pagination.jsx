const Pagination = ({ usetx }) => {
  const noOfPages = Math.floor(usetx?.transactionsInView?.length / 10) + 1;

  if (usetx?.transactionsInView?.length <= 10) return null;
  return (
    <div
      style={{
        margin: "20px 0px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        className="paginationbutton"
        onClick={() => usetx.setCurrentPage(1)}
      >
        {"<< First"}
      </button>
      <button
        className="paginationbutton"
        onClick={() => {
          if (usetx.currentPage !== 1) {
            usetx.setCurrentPage((prev) => prev - 1);
          }
        }}
      >
        {"< Back"}
      </button>
      {Array.from({ length: noOfPages }).map((pg, index) => (
        <button
          className="paginationbutton"
          key={`pagination-${index}`}
          style={{
            background:
              usetx.currentPage === index + 1
                ? "var(--bg-blue)"
                : "transparent",
            color:
              usetx.currentPage === index + 1 ? "white" : "rgba(0,0,0,0.8)",
          }}
          onClick={() => usetx.setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="paginationbutton"
        onClick={() => {
          if (usetx.currentPage !== noOfPages) {
            usetx.setCurrentPage((prev) => prev + 1);
          }
        }}
      >
        {"Next >"}
      </button>
      <button
        className="paginationbutton"
        onClick={() => {
          usetx.setCurrentPage(noOfPages);
        }}
      >
        {"Last >>"}
      </button>
    </div>
  );
};

export default Pagination;
