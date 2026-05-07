export const productConfig = {
  "product": {
    "rank": 12,
    "tier": "P0",
    "score": 68,
    "domain": "OBSStreaming",
    "ideaNo": 5,
    "ideaName": "素材・成果物カタログ",
    "repository": "obs-asset-artifact-catalog",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "OBS素材の再利用と所在管理は既存の配信品質系PICKUPに後付けしやすい。",
    "surface": "OBS 運用向けのローカル CLI、JSON カタログ、手順ランチャー adapter",
    "integration": "",
    "overview": "タグ、検索、プレビュー、重複検出、関連ファイル棚を統合する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
    "problem": "素材や完成物が増えると再利用候補や重複を探しづらい。",
    "differentiation": "配信前確認、録画証跡、音声・画面状態を日本語UIで一括管理する。 素材、メモ、出力先を同じカードで管理する。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
