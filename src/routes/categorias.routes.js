import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

const router = Router();

//get//
router.get("/", categoriaController.getCategorias )

export default router;
