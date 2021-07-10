import axios from 'axios'


const AUCTIONS_API = "http://localhost:8085/api/auctions";

class AuctionService{
    getAuctions(){
        return axios.get(AUCTIONS_API);
    }
    
};

export default new AuctionService()