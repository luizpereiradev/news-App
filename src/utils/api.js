export const API_URL = 'https://newsapi.org/v2/'
export const API_KEY = process.env.API_URL

export function GET_TOP(country = 'br', category = 'general') {
  return {
    url: `${API_URL}top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`,
  }
}
