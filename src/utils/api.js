export const API_URL = 'https://api.bing.microsoft.com/v7.0/news/search'
export const API_KEY = 'a0ff9b6bd16d49b6b884ba423c4c6541'
export const CLIENT_ID = '54666b4e-e74d-48ef-8ab2-ad5e15e3b379'

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
