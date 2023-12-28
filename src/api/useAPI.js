const API_URL = import.meta.env.VITE_BACKEND_URL;

const useAPI = () => {
  async function crud(requestMethod, endpoint, data, isFormdata) {
    let token = localStorage.getItem("token");

    if (!token || token === undefined || token === "undefined") {
      token = sessionStorage.getItem("token");
    }

    const requestOptions = isFormdata
      ? {
          method: requestMethod,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: data ? data : null,
        }
      : {
          method: requestMethod,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: data ? JSON.stringify(data) : null,
        };

    try {
      const response = await fetch(API_URL + endpoint + "/", requestOptions);

      if (response.status === 401) {
        throw 401;
      }

      if (requestMethod === "DELETE") return { status: response.status };

      const responseData = await response.json();

      if (responseData["status"]) {
        responseData["modelStatus"] = responseData["status"];
      }
      responseData["status"] = response.status;
      // refreshToken();
      return responseData;
    } catch (error) {
      console.error("API call error:", error);
      throw error;
    }
  }

  return { crud };
};

export default useAPI;
