import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "406affcc68e54871b6bb00894b4d9ae4",
  },
});
