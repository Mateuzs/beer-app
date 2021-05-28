// types
import { Beer, PunkApiBeer } from "../types";

const mapPunkApiBeerToBeer = (punkApiBeer: PunkApiBeer): Beer => {
  const { name = "", image_url: imageUrl = "", description = "" } = punkApiBeer;

  return { name, imageUrl, description };
};

export default mapPunkApiBeerToBeer;
