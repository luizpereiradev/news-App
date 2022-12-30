export const API_URL = 'https://api.bing.microsoft.com/v7.0/news/search'
export const API_KEY = process.env.API_KEY
export const CLIENT_ID = process.env.CLIENT_ID

export function GET_TOP(page, q,count = 10) {
  return {
    url: `${API_URL}?${ q != 'articles' && `q=${q}&`}count=${count}&offset=${page}&mkt=pt-BR&safeSearch=Strict&freshness=Month`,
    options: {
      method: "GET",
      headers: {
        "Ocp-Apim-Subscription-Key": API_KEY,
        "X-Search-ClientID": CLIENT_ID,
      },
    },
  }
}