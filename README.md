# AAIF Dallas Community — Event Artifacts & Pages

This repository contains event websites, materials, and run-of-show artifacts for the **AAIF Dallas Community**.

## 🌐 Live Preview on GitHub Pages

When deployed to GitHub Pages, the site can be accessed at:
- **Root Portal**: `https://<username-or-org>.github.io/<repo>/` (auto-redirects to the latest event)
- **Agentic AI Day Event Portal**: `https://<username-or-org>.github.io/<repo>/Agentic-AI-Day_27_Jan_2027/`

### GitHub Pages Activation Steps
1. Navigate to **Settings** > **Pages** in this GitHub repository.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Select branch: `main` (or `gh-pages`) and folder: `/ (root)`.
4. Click **Save**.

---

## 📁 Repository Structure

```
├── .gitignore                                             # Standard OS, editor, node, and python ignores
├── .nojekyll                                              # Bypasses Jekyll processing on GitHub Pages
├── index.html                                             # Root gateway portal & auto-redirect
├── README.md                                              # Repository documentation & guide
├── assets/                                                # Vector logos and shared assets
│   ├── AAIF_Primary_Logo_Black.svg
│   ├── AAIF_Primary_Logo_White.svg
│   ├── AAIF_Symbol_Black.svg
│   └── AAIF_Symbol_White.svg
└── Agentic-AI-Day_27_Jan_2027/                            # Dedicated folder for the January 27 Event
    ├── index.html                                         # Full interactive event application
    ├── styles.css                                         # Event styling, glassmorphism, and print stylesheet
    ├── script.js                                          # Schedule filter tabs, search, and copy helpers
    ├── Agentic AI Day - Event Management & Run-of-Show Guide.md # Canonical run-of-show source guide
    └── assets/                                            # Event-specific asset bundle
        ├── AAIF_Primary_Logo_Black.svg
        ├── AAIF_Primary_Logo_White.svg
        ├── AAIF_Symbol_Black.svg
        └── AAIF_Symbol_White.svg
```

---

## 📋 Included Sections in Agentic AI Day (Jan 27)

1. **Executive Overview & Objectives**: Bridging the gap between conceptual LLM wrappers and enterprise production-grade multi-agent clusters.
2. **Interactive Run-of-Show Schedule**:
   - Filter by Track: *All Sessions*, *Keynotes & Plenary*, *Track A (Main Auditorium)*, *Track B (Hands-On Lab)*.
   - Real-time search across session titles, tools, and technical topics.
   - Printable / PDF-ready layout (`window.print()`).
3. **Technical Session Scope & Speaker Guidance**:
   - Architecture Patterns & Workflows (State machines, retry storms, durable execution, HITL)
   - Internet of Agents & Dynamic Discovery
   - Identity & Trust (SPIFFE/SPIRE, ephemeral credentials)
   - Sandboxing for AI-DLC & Runtimes (MicroVMs / AWS Firecracker vs. Wasm)
   - Agent Gateways & Guardrails (PII masking, latency budgets)
   - Vulnerability Analysis (Prompt injection, confused deputy, tool poisoning)
   - Observability & Tracing (OpenTelemetry span context, signed Evidence Artifacts)
   - Trajectory & Causality Evaluations (Path optimality, drift metrics)
4. **Hands-On Workshop Guide (MCP & A2A)**:
   - **Lab 1**: Production MCP Servers & Hardening
   - **Lab 2**: Multi-Agent A2A Interoperability
   - **Zero-Setup Infrastructure Directive**: Cloud devcontainers & standby offline fallback USB.
5. **Day-Of Risk Mitigation & Operations Playbook**:
   - **The 15-Second Failover Rule**: Automatic switch to pre-recorded backup video if live API calls stall.
   - **Audience Q&A Pacing Protocol**: Strict microphone custody and stage timer visual cues (`10m`, `5m`, `STOP`).
   - **Volunteer & Staffing Structure**: Organizational allocation across Registration, Stage, Technical TAs (1:25 ratio), and A/V floats.
