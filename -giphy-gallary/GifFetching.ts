/**
 * If you have Giphy.com API key, you can use this functionality to fetch gif ID's
 */

const GIPHY_API_KEY = 'MCvzHelqaDhraLFpkbqArwFg9NPPM6OS';

// this is only partial type
// see https://developers.giphy.com/docs/api/endpoint
type GiphyResponse = {
  data: {
    id: string;
  }[];
};

/**
 * Queries Giphy.com API to search for GIF files
 * see https://developers.giphy.com/docs/api/endpoint
 */
export async function findGifs(phrase: string) {
  const searchRequest = {
    api_key: 'MCvzHelqaDhraLFpkbqArwFg9NPPM6OS',
    q: phrase.trim(),
  };

  try {
    const response = await fetch('https://api.giphy.com/v1/gifs/search', {
      method: 'POST',
      body: JSON.stringify(searchRequest),
    });
    const result = await response.json();

    // this is not the recommended way, but for simplicity we need only GIF IDs
    // to paste them into content URLs. Normally we should use URLs provided by this response
    console.log(result)
    return result
  } catch (e) {
    console.error('Unable to search for gifs', e);
    return [];
  }
}
