export interface goodsType {
     goodsId: string
     goodsName: string
     symbol: string
     category: string
     description: string
     unit: string
     currency: string
     basePrice: number
     lastUpdate: string
     goodsImageUrl: string
}
export interface goods_pricesType {
     goods_priceId: string
     goodsId_fk: string
     date: string
     openPrice: number
     closePrice: number
     high: number
     low: number
     changePercent: number 
}
export interface price_comparisonType {
     price_comparisonId: string
     goodsId_fk: string
     period: string
     avgPrice: number
     changePercent: number
}
export interface market_shareType {
     market_shareId: string
     goodsId_fk: string
     market: string
     sharePercent: number
     lastUpdate: string
}
export interface trade_volumeType {
     trade_volumeId: string
     goodsId_fk: string
     date: string
     buyVolume: number
     sellVolume: number
     totalVolume: number
}
export interface analyst_scoresType {
     analyst_scoreId: string
     goodsId_fk: string
     analyst: string
     stability: number
     growthPotential: number
     riskLevel: number
     recommendationScore: number
}