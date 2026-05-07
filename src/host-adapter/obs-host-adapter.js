export function buildObsGuide(report) {
  return {
    product: "obs-asset-artifact-catalog",
    guide: "素材・成果物カタログ",
    manualTestStatus: "手動テスト未実施",
    actions: report.scenarios.map((scenario) => ({ id: scenario.id, summary: scenario.summary }))
  };
}
