const API_HOST = process.env.NEXT_PUBLIC_API_URL;

export const routes = {
  submitArtist: () => [API_HOST, "artists"].join("/"),
};
