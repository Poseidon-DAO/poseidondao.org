import { IArtist } from "types";
import { POST, checkError, toJson } from "../utils";
import { routes } from "./routes";

export const submitArtist = (artist: IArtist) => {
  return POST(routes.submitArtist(), artist).then(r => console.log(r)).then(toJson).catch(e => console.log(e));
};

export const fetchNftData = (url: string) => {
  return fetch(url).then(checkError).then(toJson);
}