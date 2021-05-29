import { hotelsInfo } from "../../assets/data/data";
console.log(hotelsInfo);
const rooms = (rooms = hotelsInfo, action) => {
    switch (action.type) {
        case "CREATE":
            return [...rooms, action.payload]
        default:
            return rooms
    }
}

export default rooms