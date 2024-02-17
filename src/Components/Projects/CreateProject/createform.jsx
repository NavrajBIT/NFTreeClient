import Myform from "../../Subcomponents/form/myformnew";
import usecreate from "./usecreate";
import LocalLoading from "../../Subcomponents/loading/localloading";

const Createform = ({ submit }) => {
  const {
    formvalues,
    formdata1,
    formdata2,
    formdata3,
    handleSubmit,
    isLoading,
  } = usecreate(submit);

  return (
    <Myform
      heading={"List Project"}
      formdata={
        formvalues.type === 1
          ? formdata1
          : formvalues.type === 2
          ? formdata2
          : formdata3
      }
      formButton="Get Started"
      handleSubmit={handleSubmit}
      close={() => setSelectedOption(null)}
    />
  );
};

export default Createform;
