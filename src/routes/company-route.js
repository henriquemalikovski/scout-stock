import express from 'express';
import CompanyController from '../controllers/company-controller.js';
import authService from '../services/auth-service.js';

const routerCompany = express.Router();

routerCompany.post('/', authService.isAdmin, CompanyController.createByCNPJ);

export default routerCompany;