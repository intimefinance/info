export const FACTORY_ADDRESS = '0x7f7ad80Cb22c591e1064d96c9A076a47C3374f08' // core test v2 factory

export const NATIVE_CURRENCY_SYMBOL = 'CORE'
export const WRAPPED_CORE = '0xeefc44237354771feb09aa0a18a85ed536f15184'
export const USDC_WCORE_PAIR = '0x4e33a52e4a431d94a77cf765e56b0498654dd5ad' // token0 USDC token1 WETH
export const USDT_WCORE_PAIR = '0x0e0f99f52b224bf3505cd75b61491207251b6991' // token0 USDT token1 WETH
export const EXPLORER = 'https://scan.test.btcs.network'
export const SWAP_APP_LINK = 'https://intimefinance.netlify.app'
export const V2_SUBGRAPH_START_BLOCK = 10175264

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://raw.githubusercontent.com/intimefinance/intime-token-list/main/tokenlist.json',
]

// hide from overview list
export const TOKEN_BLACKLIST = []

// pair blacklist
export const PAIR_BLACKLIST = []

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = []

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or WCORE pairings.'

// pairs that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES_PAIRS = []

// tokens that should be tracked but arent due to lag in subgraph
// all pairs that include token will be tracked
export const TRACKED_OVERRIDES_TOKENS = []

export const getTokenLogoLink = (address) => {
  return `https://raw.githubusercontent.com/intimefinance/intime-token-list/main/assets/core_test/${address}/logo.png`
}
