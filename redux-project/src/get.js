import axios from "axios";


const get = async (page) => {
const url = `https://stg.carwale.com//api/stocks/?pn=${page}&lcr=24&shouldfetchnearbycars=False&stockfetched=32&excludestocks=D2092329+D2104538+D2102716+D2079580+D2113693+D2109221+D2119382+D2102862`;

  try {
    console.log("hi");
      const response = await axios.get(url);
    return response.data.stocks;
  } catch (err) {
    console.log(err);
  }
};

export default get;