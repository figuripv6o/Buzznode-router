# ADR-0002 — Execution Model

## Status
ACCEPTED

## Core Sentence
Execution within Buzznode Router is governed by a status-first, badge-associated, upward-traceable runtime where signal events, backend sync actions, and reusable artifacts must resolve through identity, persistence, and governance before being treated as valid system behavior.

## Runtime Path
SIGNAL -> EVENT -> ANALYSIS -> DECISION -> ACTION

## Rules
- every reusable artifact carries badge metadata
- backend sync events persist to storage
- RF / NFC / satellite-related records remain bounded by execution discipline
- governance overlays do not silently rewrite upstream base behavior
