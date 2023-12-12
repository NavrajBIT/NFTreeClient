import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const createTransaction = async (props) => {
  const url = BASE_URL + "project/transaction/";
  const data = props;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };
  try {
    const response = await axios.post(url, data, config);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const viewTransaction = async (props) => {
  const url = BASE_URL + "project/transaction/";
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };

  try {
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const createProject = async (props) => {
  const url = BASE_URL + "project/create/";
  const data = props;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };

  try {
    console.log(data);
    const response = await axios.post(url, data, config);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const updateProject = async (props, id) => {
  const url = BASE_URL + `project/update/${id}/`;
  if (props.image == "img") {
    delete props.image;
  }

  props["id"] = id;
  const data = props;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };

  try {
    const response = await axios.put(url, data, config);
    return response;
  } catch (error) {
    return error;
  }
};

const kycStatus = async (props) => {
  const endpoint = "user/kyc/";
  const url = BASE_URL + endpoint;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };

  try {
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    return error;
  }
};

const projectList = async () => {
  const url = BASE_URL + "project/projectlist/";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export {
  createProject,
  projectList,
  kycStatus,
  updateProject,
  createTransaction,
  viewTransaction,
};
