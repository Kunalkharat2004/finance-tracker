import { Router } from "express";
import clientController from "../controllers/clientController.js";


const router = Router()

router.post("/",clientController.createClient)

router.get("/",clientController.listClients)

router.put("/:id", clientController.updateClient)

router.get("/:id", clientController.getClientByID)

router.delete("/:id",clientController.deleteClient)

router.get("/:id/salary-slip",clientController.generateSalarySlip)

export default router;
