import jsdelivrDataService from '@/services/jsdelivrDataService'

const convertBytes = (bytes) => {
  const mb = bytes / (1024 * 1024)
  if (mb > 1024) {
    const gb = mb / 1024
    if (gb > 1024) {
      const tb = gb / 1024
      return tb.toFixed(2) + ' TB'
    } else {
      return gb.toFixed(2) + ' GB'
    }
  } else {
    return mb.toFixed(2) + ' MB'
  }
}

const state = () => ({
  packageStats: null,
  packageDetail: null,
  packagesList: [],
  pageSize: 10,
  currentPage: 1
})

const getters = {
  getPackageDetail: (state) => {
    return state.packageDetail
  },
  displayedPackages: (state) => {
    const start = (state.currentPage - 1) * state.pageSize
    const end = start + state.pageSize
    return state.packagesList.slice(start, end)
  },
  hasResult: (state) => {
    return state.packagesList.length > 0
  },
  showNavigation: (state) => {
    return state.packagesList.length > state.pageSize
  },
  pageCount: (state) => {
    return Math.ceil(state.packagesList.length / state.pageSize)
  },
  bandwidth: (state) => {
    const bytes = state.packageStats?.bandwidth?.total || 0
    return convertBytes(bytes)
  },
  hits: (state) => {
    return state.packageStats?.hits?.total || 0
  }
}

const actions = {
  async getStatsByPackage({ commit }, query) {
    const stats = await jsdelivrDataService.getStats(query)
    commit('SET_PACKADGE_STATS', stats)
  },
  async getDetailsByVersion({ commit }, version) {
    commit('SET_PACKADGE_DETAILS', version)
  },
  async getPackagesByQuery({ commit }, query) {
    let packages = []
    try {
      packages = await jsdelivrDataService.getPackagesByQuery(query)
      commit('SET_PACKAGES', packages)
    } catch (error) {
      commit('SET_PACKAGES', packages)
    }
  },
  prevPage({ commit }) {
    commit('PREV_PAGE')
  },
  nextPage({ commit }) {
    commit('NEXT_PAGE')
  }
}

const mutations = {
  SET_PACKADGE_STATS(state, stats) {
    state.packageStats = stats
  },
  SET_PACKADGE_DETAILS(state, details) {
    state.packageDetail = state.packagesList.filter((list) => list.version == details).shift()
  },
  SET_PACKAGES(state, packages) {
    state.currentPage = 1
    state.packageDetail = null
    state.packagesList = packages
    state.packageStats = null
  },
  PREV_PAGE(state) {
    state.currentPage--
  },
  NEXT_PAGE(state) {
    state.currentPage++
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
