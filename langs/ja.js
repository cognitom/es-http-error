import factory from '../lib/factory.js'

const dictionary = {
  400: 'リクエストが不正である',
  401: '認証が必要である',
  402: '支払いが必要である',
  403: '禁止されている',
  404: '未検出',
  405: '許可されていないメソッド',
  406: '受理できない',
  407: 'プロキシ認証が必要である',
  408: 'リクエストタイムアウト',
  409: '競合',
  410: '消滅した',
  411: '長さが必要。',
  412: '前提条件で失敗した',
  413: 'ペイロードが大きすぎる',
  414: 'URIが大きすぎる',
  415: 'サポートしていないメディアタイプ',
  416: 'レンジは範囲外にある',
  417: 'Expectヘッダによる拡張が失敗',
  418: '私はティーポット',
  421: '誤ったリクエスト',
  422: '処理できないエンティティ',
  423: 'ロックされている',
  424: '依存関係で失敗',
  425: 'Unordered Collection',
  426: 'アップグレード要求',
  428: 'Precondition Required',
  429: 'Too Many Requests',
  431: 'Request Header Fields Too Large',
  451: '法的理由により利用不可',
  500: 'サーバ内部エラー',
  501: '実装されていない',
  502: '不正なゲートウェイ',
  503: 'サービス利用不可',
  504: 'ゲートウェイタイムアウト',
  505: 'サポートしていないHTTPバージョン',
  506: 'Variant Also Negotiates',
  507: '容量不足',
  508: 'ループを検出',
  509: '帯域幅制限超過',
  510: '拡張できない',
  511: 'Network Authentication Required'
}

export {statusCodes} from '../lib/status-codes.js'
export default factory(dictionary)
