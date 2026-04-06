# System Architecture

## Core Runtime
SIGNAL -> EVENT -> ANALYSIS -> DECISION -> ACTION

## Inputs
- realtime router websocket events
- RF events
- NFC log events
- satellite metadata overlays
- backend sync hooks

## Persistence
- data/nfc_logs
- runtime event records
- reusable artifact metadata
- future database targets

## Boundary Model
- public runtime logic
- governance overlays
- private operational controls
