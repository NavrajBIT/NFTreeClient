import { useState, useEffect } from "react";
import useAPI from "../../../api/useAPI";

const usedetails = (projectId, notMyProject) => {
  const api = useAPI();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaggedIn, setIsLoggedIn] = useState(true);
  const [project, setProject] = useState(null);
  const [projectImages, setProjectImages] = useState(null);
  const [plantImages, setPlantImages] = useState(null);
  const [projectDocs, setProjectDocs] = useState(null);
  const [recipients, setRecipients] = useState(null);
  const [updateProjectPopup, setUpdateProjectPopup] = useState(false);

  useEffect(() => {
    poppulateProject();
    poppulateProjectImages();
    poppulateProjectDocs();
    poppulatePlantImages();
    if (!notMyProject) {
      poppulateRecipients();
    }
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
  const poppulatePlantImages = async () => {
    setIsLoading(true);
    await api
      .crud("GET", `project/${projectId}/specie_images`)
      .then((res) => {
        if (res.status === 200) {
          setPlantImages(res);
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
        if (res.status === 200) {
          setProjectDocs(res);
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  const poppulateRecipients = async () => {
    setIsLoading(true);
    await api
      .crud("GET", `project/project-recipient/${projectId}`)
      .then((res) => {
        if (res.status === 200) {
          setRecipients(res);
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
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
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          if (err === 401) setIsLoggedIn(false);
        });
      await poppulateProject();
      setIsLoading(false);
    } else {
      alert("Please select a valid image file.");
    }
  };
  const uploadGalleryImage = async (file) => {
    console.log("uploading file...");
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
        .then((res) => {
          console.log(res);
        })
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
  const uploadPlantImage = async (file) => {
    console.log("uploading file...");
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
      const endpoint = "project/specie_images/create";
      setIsLoading(true);
      await api
        .crud("POST", endpoint, formdata, true)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          alert("Could not upload image.");
          if (err === 401) setIsLoggedIn(false);
        });
      await poppulatePlantImages();
      setIsLoading(false);
    } else {
      alert("Please select a valid image file.");
    }
  };
  const uploadProjectDoc = async (file, name) => {
    const fileName = file.name.replace(/\s+/g, "_");
    const newFile = new File([file], fileName, { type: file.type });

    const formdata = new FormData();
    formdata.append("file", newFile);
    formdata.append("project", projectId);
    formdata.append("name", name);
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
    return true;
  };

  const addRecipient = async (email, wallet) => {
    setIsLoading(true);
    await api
      .crud("POST", `project/project-recipient/${projectId}`, {
        project: projectId,
        email: email,
        wallet: wallet,
      })
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) poppulateRecipients();
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  const deleteRecipient = async (id) => {
    setIsLoading(true);
    await api
      .crud("DELETE", `project/project-recipient-detail/${id}`)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) poppulateRecipients();
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };
  const deleteGalleryImage = async (id) => {
    setIsLoading(true);
    await api
      .crud("DELETE", `project/plant_images/${id}/update`)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) poppulateProjectImages();
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };
  const deleteDoc = async (id) => {
    setIsLoading(true);
    await api
      .crud("DELETE", `project/docs/${id}/update`)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) poppulateProjectDocs();
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  const updateProject = async () => {
    setIsLoading(true);
    let apiData = { ...project };
    delete apiData.image;
    delete apiData.document;
    await api
      .crud("PATCH", `project/update/${projectId}`, apiData)
      .then((res) => {
        if (res.status === 200) {
          setProject(res);
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    poppulateProject();
    setUpdateProjectPopup(false);
    setIsLoading(false);
  };

  return {
    projectId,
    isLoading,
    isLoaggedIn,
    setIsLoggedIn,
    project,
    setProject,
    projectImages,
    plantImages,
    setProjectImages,
    projectDocs,
    setProjectDocs,
    recipients,
    uploadProjectImage,
    uploadGalleryImage,
    uploadPlantImage,
    uploadProjectDoc,
    addRecipient,
    deleteRecipient,
    deleteGalleryImage,
    deleteDoc,
    updateProjectPopup,
    setUpdateProjectPopup,
    updateProject,
    poppulateProjectDocs,
  };
};

export default usedetails;
