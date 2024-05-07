import axios from 'axios';

const DIAGNOSE_API_BASE_URL = "http://localhost:8080/project/pharm/diagnose";

class DiagnoseService
{
    diagnose(data)
    {
        return axios.post(DIAGNOSE_API_BASE_URL, data);
    }
}

export default new DiagnoseService();