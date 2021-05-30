import { hotelsInfo } from "../../assets/data/data";
const rooms = (rooms = hotelsInfo, action) => {
    switch (action.type) {
        case "ADD":
            return [...rooms, action.payload]
        default:
            return rooms
    }
}

export default rooms