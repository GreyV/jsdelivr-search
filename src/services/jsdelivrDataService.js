class jsdelivrDataService {
  constructor() {
    this.endpoint = `https://data.jsdelivr.com/v1/`
  }

  async getStats(query) {
    const response = await fetch(`${this.endpoint}stats/packages/npm/${query}`)
    const data = await response.json()
    return data
  }
  async getPackagesByQuery(query) {
    const response = await fetch(`${this.endpoint}packages/npm/${query}`)
    const data = await response.json()

    const packages = data.versions.map((version) => ({
      name: data.name,
      tags: data.tags,
      links: version.links,
      version: version.version
    }))
    return packages
  }
}

export default new jsdelivrDataService()
