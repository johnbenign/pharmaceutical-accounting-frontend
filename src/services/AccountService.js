import axios from 'axios';

const ACCOUNTING_API_BASE_URL = "http://localhost:8080/project/pharm/accounting";

axios.defaults.withCredentials = true;



class AccountService
{
    

    getAllTransactions(){
        return axios.get(ACCOUNTING_API_BASE_URL)
    }

    addTransaction(incomeTx)
    {
        return axios.post(ACCOUNTING_API_BASE_URL, incomeTx);
    }

    getTodayProfit()
    {
        return axios.get(ACCOUNTING_API_BASE_URL + "/todayProfit");
    }

    getTotalProfit()
    {
        return axios.get(ACCOUNTING_API_BASE_URL + "/totalProfit");
    }

    updateTransaction(incomeTx)
    {
        return axios.put(ACCOUNTING_API_BASE_URL + "/" + incomeTx.txId, incomeTx);
    }

    getTransactionById(txId)
    {
        return axios.get(ACCOUNTING_API_BASE_URL + "/" + txId);
    }

    deleteTransaction(txId)
    {
        return axios.delete(ACCOUNTING_API_BASE_URL + "/" + txId);
    }
}

export default new AccountService();