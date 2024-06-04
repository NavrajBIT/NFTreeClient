import ProjectProof from "./projectProof";
import usedetails from "../projectDetails/usedetails";
import { useParams } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import { useEffect, useState } from "react";
import Loading from "../../Subcomponents/loading/loading";

const Proof = () => {
  const api = useAPI();
  const params = useParams();
  const nftId = params.nftId;
  const [nft, setNft] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    poppulateNft();
  }, []);
  const poppulateNft = async () => {
    setIsLoading(true);
    await api
      .crud("GET", `project/nftData/?nftId=${nftId}`)
      .then((res) => {
        if (res.status == 200) setNft(res.certificate);
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };
  if (isLoading) return <Loading />;

  return (
    <div>
      <ProjectProof details={nft} />
    </div>
  );
};

export default Proof;
