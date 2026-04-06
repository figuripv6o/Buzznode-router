# ADR-0001 — Repository Governance Boundary

## Status
ACCEPTED

## Context
Buzznode Router is derived from an upstream router base and must remain compatible where practical while carrying its own execution discipline, persistence path, and governance overlays.

## Decision
1. Preserve upstream-compatible router behavior where possible.
2. Add Buzzomatic overlays in separate governance, docs, and server/artifact paths.
3. Require reusable artifacts to carry badge metadata.
4. Keep public runtime logic distinct from private operational governance.
5. Route signal-bearing events upward into persistence and traceable ADR discipline.

## Consequences
- Cleaner future upstream alignment
- Stronger project identity
- Reusable artifact discipline
