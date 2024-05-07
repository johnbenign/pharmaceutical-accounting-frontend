import axios from 'axios';

const INVENTORY_API_BASE_URL = "http://localhost:8080/project/pharm/inventory";

//axios.defaults.withCredentials = true;

class InventoryService
{
    getAllInventories(){
        return axios.get(INVENTORY_API_BASE_URL)
    }

    createInventory(inventory)
    {
        return axios.post(INVENTORY_API_BASE_URL, inventory);
    }

    updateInventory(inventory)
    {
        return axios.put(INVENTORY_API_BASE_URL + "/" + inventory.itemId, inventory);
    }

    getInventoryById(itemId)
    {
        return axios.get(INVENTORY_API_BASE_URL + "/" + itemId);
    }

    deleteInventory(itemId)
    {
        return axios.delete(INVENTORY_API_BASE_URL + "/" + itemId);
    }
}

export default new InventoryService();