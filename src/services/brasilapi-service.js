import axios from 'axios';

const brasilApiInstance = axios.create({
  baseURL: 'https://brasilapi.com.br/api',
  timeout: 1000,
})

const brasilApiService = {
  getInfoByCNPJ: async (cnpj) => {
    const response = await brasilApiInstance.get(`/cnpj/v1/${cnpj}`)
    const data = {
      "cnpj": response.data['cnpj'],
      "corporate_reason": response.data['razao_social'],
      "name": response.data['nome_fantasia'],
    }

    return data
  },
}

export default brasilApiService