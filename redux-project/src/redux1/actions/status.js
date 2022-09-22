import axios from "axios";

export const started = () => {
  return { type: "loading" };
};

export const success = (data) => {
    return {
        type: "success",
        payload: data
    };
};

export const error = () => {
  return { type: "error" };
};

export const getProduct = (page) => async (dispatch) => {
    dispatch(started());
  try {
    console.log("Product", page);
    const response = await axios.get(
      `https://carwale.com/api/stocks/?pn=${page}&lcr=24&shouldfetchnearbycars=False&stockfetched=32&excludestocks=D3177499+D3167957+D3157837+D3161759+D3196249+D3153525+D3037487+D3188379`
    );
        console.log(response.data.stocks);
        dispatch(success(response.data.stocks));
    } catch (err) { 
        dispatch(error());   
    }

};

