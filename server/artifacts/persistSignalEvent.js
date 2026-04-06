const fs = require("fs");
const path = require("path");
const { buildArtifactHeader } = require("./artifactHeader");

function persistSignalEvent(event = {}) {
  const header = buildArtifactHeader({
    badgeId: "BZZ-SIGNAL-0001",
    badgeClass: "Signal Event",
    artifactClass: "runtime-event"
  });

  const payload = { header, event };
  const dir = path.join(process.cwd(), "data", "nfc_logs");

  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const file = path.join(dir, `${Date.now()}-${event.type || "event"}.json`);
  fs.writeFileSync(file, JSON.stringify(payload, null, 2));
  return file;
}

module.exports = { persistSignalEvent };
