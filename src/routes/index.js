import { Router } from "express";

import ProductRoutes from "./product.routes"

const routes = new Router();

routes.use("/produit", ProductRoutes)


export default routes