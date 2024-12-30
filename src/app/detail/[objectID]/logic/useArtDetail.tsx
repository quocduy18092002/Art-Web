import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface ArtworkDetail {
  primaryImageSmall: string;
  artistDisplayName: string;
  title: string;
  objectID: string;
  additionalImages: string[];
  department: string;
  region: string;
  medium: string;
  dimensions: string;
  creditLine: string;
}

const fetchArtworkDetails = async (objectID: string): Promise<ArtworkDetail> => {
  const response = await axios.get<ArtworkDetail>(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );
  console.log(response.data);
  return response.data;
};

const useArtDetail = ({ objectID }: { objectID: string }) => {
  const artwork = useQuery<ArtworkDetail>({
    queryKey: ["artwork", objectID],
    queryFn: () => fetchArtworkDetails(objectID), 
    refetchOnWindowFocus: false,
  });

  return { details: artwork.data, isLoading: artwork.isLoading, error: artwork.error };
};

export default useArtDetail;
