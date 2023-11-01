import Company from "../models/company.js";
import brasilApiService from "../services/brasilapi-service.js";

const companyController = {
  createByCNPJ: async (req, res) => {
    try {
      let { cnpj } = req.body;
      if (!cnpj) {
        res.status(400).json({ message: 'CNPJ is required' })
        return
      }
      const regex = /[^a-zA-Z0-9]/g;
      const subst = ``;
      cnpj = cnpj.replace(regex, subst);

      if (cnpj.length !== 14) {
        res.status(400).json({ message: 'CNPJ must have 14 characters' })
        return
      }
      const info = await brasilApiService.getInfoByCNPJ(cnpj);
      const savedCompany = await Company.create(info);
      res.status(201).json(savedCompany);
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }
}

export default companyController;