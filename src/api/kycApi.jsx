import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const KycApiForID = async (data) => {
  try {
    const url = `${baseURL}user/${data}/`;
    const method = "get";
    const response = await axiosPerformAction(url, method);

    return response;
  } catch (error) {
    console.error("Error fetching account details:", error);
  }
};

const ApplyKyc = async () => {
  try {
    const id = await KycApiForID("kyc");
    const url = `${baseURL}user/kyc/${id.data[0].id}/`;
    const data = id.data[0];
    data.is_applied = true;
    const method = "put";
    const response = await axiosPerformAction(url, data, method);

    console.log(response);
  } catch (error) {
    console.error("Error fetching account details:", error);
  }
};

const accountDetails = async (data) => {
  try {
    const id = await KycApiForID("account");
    const url = `${baseURL}user/account/${id.data[0].id}/`;
    const method = "put";
    const response = await axiosPerformAction(url, data, method);
  } catch (error) {
    console.error("Error fetching account details:", error);
  }
};

const userDetailApi = async (data = null) => {
  const userId = sessionStorage.getItem("id");
  try {
    const url = `${baseURL}users/${userId}/`;
    const method = data == null ? "post" : "put";
    let response;
    if (data === null) {
      response = await axiosPerformAction(url, method);
    } else {
      response = await axiosPerformAction(url, data, method);
    }

    return response;
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};

const organizationDetails = async (data) => {
  try {
    const id = await KycApiForID("organization");
    const url = `${baseURL}user/organization/${id.data[0].id}/`;
    const method = "put";
    const response = await axiosPerformAction(url, data, method);
  } catch (error) {
    console.error("Error fetching organization details:", error);
  }
};

const axiosPerformAction = async (url, data, method) => {
  const authToken = sessionStorage.getItem("token");
  try {
    const response = await axios({
      method: method,
      url: url,
      data: data,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export { accountDetails, userDetailApi, organizationDetails, ApplyKyc };
