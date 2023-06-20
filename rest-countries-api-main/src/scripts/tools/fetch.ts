export interface Country {
  name: string
  population: number
  capital: string
  region: string
  subregion: string
  flag: string
  currencies: {
    name: string
  }[]
  languages: string[]
  borders: string[]
  cca3: string
}

/**
 * It fetches a list of countries from an API, and returns a list of countries
 * @returns An array of countries
 */
export async function fetchCountries(url: string): Promise<Country[]> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(response.status.toString())
    }
    const data = await response.json()
    const countries = data.map((country: any) => {
      return {
        name: country.name.common,
        capital: country.capital ?? "N/A",
        population: country.population ?? 0,
        region: country.region ?? "N/A",
        flag: country.flags.png ?? "",
        subregion: country.subregion ?? "",
        languages: country.languages ?? "",
        tld: country.tld ?? "",
        currencies: country.currencies ?? "",
        continent: country.continent ?? "",
        borders: country.borders ?? "",
        cca3: country.cca3 ?? "",
      }
    })

    return countries
  } catch (error) {
    console.error("An error occurred:", error)
    return []
  }
}
