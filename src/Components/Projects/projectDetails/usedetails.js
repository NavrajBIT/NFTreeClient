import {useState, useEffect} from "react";
import {mockProjects} from "../../../api/mockProjectData";

const useProjectDetails = projectId => {
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [projectImages, setProjectImages] = useState([]);
  const [plantImages, setPlantImages] = useState([]);
  const [projectDocs, setProjectDocs] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [updateProjectPopup, setUpdateProjectPopup] = useState(false);

  useEffect(() => {
    // Using mock data instead
    const mockProject = mockProjects.find(p => p.id === parseInt(projectId));
    if (mockProject) {
      setProject(mockProject);
      // Initialize project docs with mock data
      setProjectDocs([
        {id: 1, name: "Land Registration Proof", file: "/docs/land_reg.pdf"},
        {id: 2, name: "NIN Proof", file: "/docs/nin.pdf"}
      ]);

      // Initialize project images based on project ID
      if (parseInt(projectId) === 1) {
        const kanoImages = [
          {id: 1, image: "/project-scrnshts/p11.png"},
          {id: 2, image: "/project-scrnshts/p12.png"},
          {id: 3, image: "/project-scrnshts/p13.png"},
          {id: 4, image: "/project-scrnshts/p14.png"}
        ];
        setProjectImages(kanoImages);
      } else if (parseInt(projectId) === 2) {
        const jigawaImages = [
          {id: 1, image: "/project-scrnshts/jigawa_p31.png"},
          {id: 2, image: "/project-scrnshts/jigawa_p32.png"},
          {id: 3, image: "/project-scrnshts/jigawa_p33.png"},
          {id: 4, image: "/project-scrnshts/jigawa_p34.png"}
        ];
        setProjectImages(jigawaImages);
      } else if (parseInt(projectId) === 3) {
        const michikaImages = [
          {id: 1, image: "/project-scrnshts/michika_p21.png"},
          {id: 2, image: "/project-scrnshts/michika_p22.png"},
          {id: 3, image: "/project-scrnshts/michika_p23.png"},
          {id: 4, image: "/project-scrnshts/michika_p24.png"}
        ];
        setProjectImages(michikaImages);
      }
    }
    setIsLoading(false);
  }, [projectId]);

  const poppulateProjectDocs = () => {
    // This function is called to populate project documents
    // In a real implementation, this would fetch documents from an API
    console.log("Populating project documents");
  };

  const uploadProjectImage = async file => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setProject({...project, image: reader.result});
    };
    reader.readAsDataURL(file);
  };

  const uploadGalleryImage = async file => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setProjectImages(prev => [...prev, {image: reader.result}]);
    };
    reader.readAsDataURL(file);
  };

  const uploadPlantImage = async file => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPlantImages(prev => [...prev, {image: reader.result}]);
    };
    reader.readAsDataURL(file);
  };

  const uploadProjectDoc = async file => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setProjectDocs(prev => [...prev, {document: reader.result}]);
    };
    reader.readAsDataURL(file);
  };

  const addRecipient = async recipient => {
    setRecipients(prev => [...prev, recipient]);
  };

  const deleteRecipient = async id => {
    setRecipients(prev => prev.filter(r => r.id !== id));
  };

  const deleteGalleryImage = async id => {
    setProjectImages(prev => prev.filter(img => img.id !== id));
  };

  const deleteDoc = async id => {
    setProjectDocs(prev => prev.filter(doc => doc.id !== id));
  };

  const updateProject = async () => {
    setIsLoading(true);
    let apiData = {...project};
    delete apiData.image;
    delete apiData.document;

    // Mock implementation
    const updatedProject = mockProjects.find(p => p.id === parseInt(projectId));
    if (updatedProject) {
      setProject({...updatedProject, ...apiData});
    }
    setUpdateProjectPopup(false);
    setIsLoading(false);
  };

  return {
    projectId,
    isLoading,
    isLoggedIn,
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
    poppulateProjectDocs
  };
};

export default useProjectDetails;
