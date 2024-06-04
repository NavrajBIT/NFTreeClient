import { useEffect, useState } from "react";
import useAPI from "../../api/useAPI";

const usetransactions = () => {
  const api = useAPI();
  const [searchValue, setSearchValue] = useState("");
  const [projects, setProjects] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [transactionsInView, setTransactionsInView] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    poppulateProjects();
  }, []);
  useEffect(() => {
    poppulateTransactions();
  }, [selectedProject]);
  useEffect(() => {
    if (transactions && transactions?.length > 0)
      setTransactionsInView((prev) => {
        let newTransactions = [];
        let searchstring = searchValue.toLocaleLowerCase();
        if (searchValue !== "") {
          transactions?.map((tx) => {
            if (tx.tx_id.toLowerCase().includes(searchstring)) {
              newTransactions.push(tx);
            }
          });
          return newTransactions;
        } else {
          return transactions;
        }
      });
  }, [searchValue]);

  const poppulateProjects = async () => {
    setIsLoading(true);
    await api
      .crud("GET", "project/myproject")
      .then((res) => {
        if (res.status === 200) {
          setProjects(res);
          setSelectedProject(res[0]);
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };
  const poppulateTransactions = async () => {
    setTransactions(null);
    setIsLoading(true);
    await api
      .crud("GET", `project/${selectedProject.id}/txns`)
      .then((res) => {
        console.log("transactions----------------------------");
        console.log(res);
        if (res.status === 200) {
          setTransactions(res);
          setTransactionsInView(res);
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  const changeValue = async () => {
    setIsLoading(true);

    await Promise.all(
      transactions.map(async (tx) => {
        await updateTx(tx);
      })
    );

    await poppulateTransactions();

    setIsLoading(false);
  };

  const updateTx = async (tx) => {
    await api
      .crud("PUT", `project/transaction/update/${tx.id}`, tx)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return {
    isLoading,
    isLoggedIn,
    setIsLoggedIn,
    searchValue,
    setSearchValue,
    projects,
    selectedProject,
    setSelectedProject,
    transactions,
    setTransactions,
    transactionsInView,
    changeValue,
    currentPage,
    setCurrentPage,
  };
};

export default usetransactions;
