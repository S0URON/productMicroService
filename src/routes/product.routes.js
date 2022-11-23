import { Router } from 'express';

import * as getProductsCtrl from '../controllers/products/getProducts';
import * as getProductByIdCtrl from '../controllers/products/getProduct';
import * as deleteProductCtrl from '../controllers/products/deleteProduct';
import * as createProductCtrl from '../controllers/products/createProduct';
import * as editProductCtrl from '../controllers/products/editProduct';


const routes = new Router();

routes.get('', getProductsCtrl.getProducts);
routes.get('/:id', getProductByIdCtrl.getProductById)
routes.delete('/:id', deleteProductCtrl.deleteProduct)
routes.put('/:id', editProductCtrl.editProduct)
routes.post('', createProductCtrl.createProduct)


export default routes;
