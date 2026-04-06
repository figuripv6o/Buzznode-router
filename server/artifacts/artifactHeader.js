function buildArtifactHeader({
  badgeId,
  badgeClass,
  artifactClass,
  project = "Buzznode Router",
  status = "ACTIVE",
  executionPath = "SIGNAL -> EVENT -> ANALYSIS -> DECISION -> ACTION",
  persistenceTarget = "data/nfc_logs",
  governanceScope = "public-runtime-bounded"
}) {
  return {
    badgeId,
    badgeClass,
    project,
    ownerOfRecord: "Buzz",
    entity: "Buzzomatic Intelligence LLC",
    artifactClass,
    status,
    executionPath,
    persistenceTarget,
    governanceScope,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { buildArtifactHeader };
