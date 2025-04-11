import * as assignmentsDao from "./dao.js";

export default function AssignmentsRoutes(app) {
  app.post("/api/assignments", async (req, res) => {
    const newAssignment = req.body;
    const createdAssignment = await assignmentsDao.createAssignment(newAssignment);
    res.send(createdAssignment);
  });
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const updatedAssignment = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    if (!updatedAssignment) {
      res.status(404).send({ message: "Assignment not found" });
    } else {
      res.send(updatedAssignment);
    }
  });
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentsDao.deleteAssignment(assignmentId);
    if (!status) {
      res.status(404).send({ message: "Assignment not found" });
    } else {
      res.send({ message: "Assignment deleted successfully" });
    }
  });
}