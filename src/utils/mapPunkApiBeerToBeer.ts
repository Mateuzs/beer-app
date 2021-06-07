// types
import { Beer, PunkApiBeer } from "../types";

const mapPunkApiBeerToBeer = (punkApiBeer: PunkApiBeer): Beer => {
  const { id, name = "", image_url: imageUrl = "", description = "" } = punkApiBeer;

  return { id, name, imageUrl, description };
};

export default mapPunkApiBeerToBeer;
