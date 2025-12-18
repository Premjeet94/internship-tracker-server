import { Application } from "../Models/application.model.js";

export const CreateApplication = async (req, res) => {
  try {
    const { companyName, role, status, appliedDate, notes } = req.body;
    if (!companyName || !role || !appliedDate)
      return res.status(400).json({ message: "Required fields are missing" });
    const application = await Application.create({
      userid: req.user.id,
      companyName,
      status,
      role,
      appliedDate,
      notes,
    });
    return res.status(201).json(application);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};

export const GetAllApplications = async (req, res) => {
  try {
    const userid = req.user?.id;
    const application = await Application.find({ userid }).sort({
      createdAt: -1,
    });
    if (application === 0)
      return res.status(204).json({ message: "You have 0 Application" });
    return res.status(200).json(application);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const UpdateApplications = async (req, res) => {
  try {
    const _id = req.params?.id;
    const userid = req.user?.id;
    const { companyName, role, status, appliedDate, notes } = req.body;
    const application = await Application.findOneAndUpdate(
      { _id, userid },
      companyName,
      role,
      status,
      appliedDate,
      notes,
      { returnDocument: "after" }
    );
    if (!application) {
      return res.status(404).json({ message: "Document not found" });
    }
    return res.status(201).json(application);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const DeleteApplication = async (req, res) => {
  try {
    const _id = req.params?.id;
    const userid = req.user?.id;
    const application = await Application.findByIdAndDelete({ _id, userid });
    if (!application)
      return res.status(400).json({ message: "Failed to delete application" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
