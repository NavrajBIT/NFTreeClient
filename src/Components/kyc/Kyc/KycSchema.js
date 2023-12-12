import * as Yup from "yup";

const BasicDetailsSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
});

const OrganizationDetailsSchema = Yup.object().shape({
  orgName: Yup.string().required("Name of organization is required"),
  address: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is required"),
  website: Yup.string().url("Invalid URL").required("Website is required"),
  description: Yup.string().required("Description is required"),
  registrationId: Yup.string().required("Registration ID is required"),
  regProof: Yup.mixed().required("Please upload a registration proof"),
});

const RepresentativeDetailsSchema = Yup.object().shape({
  designation: Yup.string().required("This field is required"),
  signedNote: Yup.mixed().required("Please upload a signed note"),
});

export {
  BasicDetailsSchema,
  OrganizationDetailsSchema,
  RepresentativeDetailsSchema,
};
