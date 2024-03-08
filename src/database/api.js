import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

const API = {
    getRegions: () => axios.get(`${BASE_URL}/tickets/api/regions/`),
    getRegionTicketsCount: () => axios.get(`${BASE_URL}/tickets/api/region-ticket-count/`),
    getConnectionTickets: () => axios.get(`${BASE_URL}/tickets/api/connection-tickets/`),
    getConnectionTicketsByRegion: (regionId) => axios.get(`${BASE_URL}/tickets/api/connection-tickets-by-region/${regionId}/`),

}

export default API