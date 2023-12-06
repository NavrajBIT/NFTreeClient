import { useState, useEffect } from "react";
import useAPI from "../../../api/useAPI";

const usedetails = (projectId, notMyProject) => {
  const api = useAPI();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaggedIn, setIsLoggedIn] = useState(true);
  const [project, setProject] = useState(null);
  const [projectImages, setProjectImages] = useState(null);
  const [projectDocs, setProjectDocs] = useState(null);
  const [ownerdetails, setOwnerdetails] = useState({});

  useEffect(() => {
    poppulateProject();
    poppulateProjectImages();
    poppulateProjectDocs();
    poppulateOwnerDetails();
  }, [isLoaggedIn]);

  const poppulateProject = async () => {
    setIsLoading(true);
    await api
      .crud("GET", `project/${projectId}`)
      .then((res) => {
        if (res.status === 200) {
          setProject(res);
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };
  const poppulateProjectImages = async () => {
    setIsLoading(true);
    await api
      .crud("GET", `project/${projectId}/plant_images`)
      .then((res) => {
        if (res.status === 200) {
          setProjectImages(res);
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };
  const poppulateProjectDocs = async () => {
    setIsLoading(true);
    await api
      .crud("GET", `project/${projectId}/docs`)
      .then((res) => {
        console.log("docs here---");
        console.log(res);
        if (res.status === 200) {
          setProjectDocs(res);
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };
  const poppulateOwnerDetails = async () => {
    setIsLoading(true);
    await api
      .crud("GET", "user/account")
      .then((res) => {
        if (res.status === 200) {
          setOwnerdetails((prev) => {
            let newdetails = { ...prev };
            newdetails["account"] = res;
            return newdetails;
          });
        }
      })
      .catch((err) => {
        // if (err === 401) setIsLoggedIn(false);
      });
    await api
      .crud("GET", "user/avatar")
      .then((res) => {
        if (res.status === 200) {
          console.log("here---");
          console.log(res);
          setOwnerdetails((prev) => {
            let newdetails = { ...prev };
            newdetails["profilePic"] = res[0];
            return newdetails;
          });
        }
      })
      .catch((err) => {
        // if (err === 401) setIsLoggedIn(false);
      });
    await api
      .crud("GET", "user/email")
      .then((res) => {
        if (res.status === 200) {
          setOwnerdetails((prev) => {
            let newdetails = { ...prev };
            newdetails["email"] = res;
            return newdetails;
          });
        }
      })
      .catch((err) => {
        // if (err === 401) setIsLoggedIn(false);
      });
    await api
      .crud("GET", "user/organization")
      .then((res) => {
        if (res.status === 200) {
          setOwnerdetails((prev) => {
            let newdetails = { ...prev };
            newdetails["organization"] = res;
            return newdetails;
          });
        }
      })
      .catch((err) => {
        // if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  const uploadProjectImage = async (file) => {
    const fileName = file.name.replace(/\s+/g, "_");
    if (
      fileName.endsWith(".png") ||
      fileName.endsWith(".jpg") ||
      fileName.endsWith(".jpeg")
    ) {
      const newFile = new File([file], fileName, { type: file.type });

      const formdata = new FormData();
      formdata.append("image", newFile);
      const endpoint = `project/update/${projectId}`;
      setIsLoading(true);
      await api
        .crud("PATCH", endpoint, formdata, true)
        .then((res) => {})
        .catch((err) => alert("Could not upload image."));
      await poppulateProject();
      setIsLoading(false);
    } else {
      alert("Please select a valid image file.");
    }
  };
  const uploadGalleryImage = async (file) => {
    const fileName = file.name.replace(/\s+/g, "_");
    if (
      fileName.endsWith(".png") ||
      fileName.endsWith(".jpg") ||
      fileName.endsWith(".jpeg")
    ) {
      const newFile = new File([file], fileName, { type: file.type });

      const formdata = new FormData();
      formdata.append("image", newFile);
      formdata.append("project", projectId);
      const endpoint = "project/plant_images/create";
      setIsLoading(true);
      await api
        .crud("POST", endpoint, formdata, true)
        .then((res) => {})
        .catch((err) => {
          alert("Could not upload image.");
          if (err === 401) setIsLoggedIn(false);
        });
      await poppulateProjectImages();
      setIsLoading(false);
    } else {
      alert("Please select a valid image file.");
    }
  };
  const uploadProjectDoc = async (file) => {
    const fileName = file.name.replace(/\s+/g, "_");
    const newFile = new File([file], fileName, { type: file.type });

    const formdata = new FormData();
    formdata.append("file", newFile);
    formdata.append("project", projectId);
    const endpoint = "project/docs/create";
    setIsLoading(true);
    await api
      .crud("POST", endpoint, formdata, true)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert("Could not upload document.");
        if (err === 401) setIsLoggedIn(false);
      });
    await poppulateProjectDocs();
    setIsLoading(false);
  };

  return {
    projectId,
    isLoading,
    isLoaggedIn,
    setIsLoggedIn,
    project,
    projectImages,
    setProjectImages,
    projectDocs,
    setProjectDocs,
    ownerdetails,
    uploadProjectImage,
    uploadGalleryImage,
    uploadProjectDoc,
  };
};

export default usedetails;
