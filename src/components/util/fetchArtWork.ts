import axios from "axios";

export interface Artwork {
  objectIDs: string[];
}

export interface ArtworkDetail {
  objectID: string;
  primaryImageSmall: string;
  artistDisplayName: string;
}

export const fetchObjectIDs = async (query: string): Promise<string[]> => {
  const response = await axios.get<Artwork>(
    `https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&q=${query}`
  );
  return response.data.objectIDs || [];
};

export const fetchArtworkDetails = async (
  ids: string[]
): Promise<ArtworkDetail[]> => {
  const details = await Promise.all(
    ids.map(async (id) => {
      try {
        const response = await axios.get<ArtworkDetail>(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        );
        return response.data;
      } catch {
        return null;
      }
    })
  );
  return details.filter(
    (item): item is ArtworkDetail => item !== null && item !== undefined && item.primaryImageSmall !== "" && item.artistDisplayName !== "" );
};
