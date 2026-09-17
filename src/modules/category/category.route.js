import express from "express";
import {
  create,
  details,
  list,
  remove,
  update,
} from "./category.controller.js";

const router = express.Router();

router.get("/", list);
router.get("/:id", details);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);
const categoryRoutes = router;
export default categoryRoutes;
