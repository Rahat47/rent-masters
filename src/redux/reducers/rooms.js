import { hotelsInfo } from "../../assets/data/data";

const rooms = (rooms = hotelsInfo, action) => {
    switch (action.type) {
        case "DELETE":
            return rooms.filter((room) => room.id !== action.payload)
        case "UPDATE":
            return rooms.map((room) => room.id === action.payload.id ? action.payload : room)
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...rooms, action.payload]
        default:
            return rooms
    }
}

export default rooms