# **Agentic AI Day: Event Management & Run-of-Show Guide**

Production readiness, architectural patterns, multi-agent interoperability, and enterprise security.

# **1\. Event Overview**

Agentic AI Day is a full-day, highly technical workshop and conference engineered for systems architects, staff engineers, AI researchers, and technical product leaders. The event bridges the gap between conceptual LLM wrappers and production-grade, autonomous multi-agent systems operating in enterprise environments.

The morning schedule establishes architectural foundations through dual keynote addresses and technical deep dives in the main auditorium. The afternoon transitions into two parallel tracks:

* **Track A (Main Auditorium):** Deep-dive technical sessions covering hard engineering challenges: microVM/Wasm execution sandboxes, agentic gateway security, OpenTelemetry tracing, and trajectory evaluation.  
* **Track B (Hands-On Lab):** Facilitated, code-first workshops focusing on practical implementation of the Model Context Protocol (MCP) and Agent-to-Agent (A2A) inter-agent communication frameworks.

---

# **2\. Full-Day Run-of-Show Schedule**

| Time | Session / Segment | Description & Operational Notes | Track / Location |
| :---- | :---- | :---- | :---- |
| **08:00 – 09:00** | Doors Open & Registration | Badge pickup, coffee, Wi-Fi onboarding, and A/V soundchecks across all stages. | Main Foyer |
| **09:00 – 09:45** | Keynote 1: The Production Shift | **Moving from Single-Prompt Wrappers to Autonomous Multi-Agent Systems.** Transitioning to resilient, stateful agent networks. | Main Auditorium |
| **09:45 – 10:30** | Keynote 2: The Internet of Agents | **Cross-Organizational Communication & Protocols.** Open standards, decentralized ecosystems, and dynamic negotiation. | Main Auditorium |
| **10:30 – 10:45** | Morning Break | Coffee refresh, light snacks, and speaker microphone swaps. | Foyer & Exhibit Area |
| **10:45 – 11:30** | Architecture Patterns & Workflows | Orchestration vs. choreography, state management, human-in-the-loop (HITL) checkpoints, and durable execution. | Main Auditorium |
| **11:30 – 12:15** | Agent Discovery, Identity & Trust | Cryptographic agent identities, capability registries, attestation, and verifying third-party agents prior to context handoff. | Main Auditorium |
| **12:15 – 01:15** | Networking Lunch | Catered buffet service, dietary accommodations, and unstructured hallway track discussions. | Dining Hall |
| **01:15 – 02:00** | Sandboxing & Runtimes *(Track A)* | **MicroVMs, Wasm & AI-DLC Isolation.** Memory safety, cold-start mitigation, and hypervisor-level isolation for untrusted code execution. | Main Auditorium |
| **01:15 – 02:00** | Lab 1: Production MCP Servers *(Track B)* | **Tool Definitions & Auth.** Exposing enterprise resources via standard MCP interfaces, transport security (SSE/Streamable HTTP), and scoped OAuth. | Hands-On Lab |
| **02:00 – 02:45** | Gateways & Vulnerabilities *(Track A)* | **Prompt Injection & Egress Filtering.** Defense-in-depth against indirect injection, confused deputy scenarios, and real-time PII redaction. | Main Auditorium |
| **02:00 – 02:45** | Lab 1 Continued: Hardening MCP *(Track B)* | **Mitigating Tool Poisoning.** Defending against rug-pull attacks, schema manipulation, and enforcing gateway security policies programmatically. | Hands-On Lab |
| **02:45 – 03:00** | Afternoon Break | Refreshments and technical environment/network connectivity checks for Lab 2\. | Foyer & Lab Room |
| **03:00 – 03:45** | Observability & Tracing *(Track A)* | **OpenTelemetry & Evidence Artifacts.** Mapping non-deterministic execution paths into structured trace trees and verifiable audit logs. | Main Auditorium |
| **03:00 – 03:45** | Lab 2: Multi-Agent A2A Interop *(Track B)* | **Agent Cards & Task Lifecycles.** Publishing `/.well-known/agent.json`, handling asynchronous task state changes, and negotiating capabilities. | Hands-On Lab |
| **03:45 – 04:30** | Trajectory & Causality *(Track A)* | **Path Grading & Drift Analysis.** Assessing decision-tree efficiency, detecting cyclic loops, and evaluating context-causality metrics. | Main Auditorium |
| **03:45 – 04:30** | Lab 2 Continued: End-to-End Workflow *(Track B)* | **Full Pipeline Integration.** Connecting an orchestrator agent to remote A2A peers backed by private MCP servers using distributed trace IDs. | Hands-On Lab |
| **04:30 – 05:00** | Closing Remarks & Happy Hour | Both tracks reconvene for final key takeaways, feedback collection, and informal networking. | Main Auditorium & Foyer |

---

# **3\. Technical Session Scope & Speaker Briefing Guide**

Speakers and session leads must align their content with the technical depth and specific topics outlined below:

## **Architecture Patterns & Agentic Workflows**

* **Scope:** Deterministic state machines vs. dynamic, autonomous loops. Handling retry storms, infinite loop detection, state serialization, and persistence models for multi-day, long-running agent execution.  
* **Speaker Guidance:** Avoid high-level conceptual diagrams. Code examples should demonstrate concrete state recovery and human-in-the-loop (HITL) pause/resume logic using durable execution engines.

## **Internet of Agents & Discovery**

* **Scope:** Protocols enabling agent-to-agent negotiation across organizational boundaries. Dynamic agent discovery catalogs, zero-trust network architectures, and dynamic capability matching.  
* **Speaker Guidance:** Address practical cross-domain boundaries, handling untrusted metadata payloads, and latency implications of remote agent discovery.

## **Identity & Trust**

* **Scope:** User-delegated OAuth tokens vs. autonomous machine-to-machine identities. Cryptographic attestation, SPIFFE/SPIRE usage for agents, short-lived ephemeral credentials, and strict privilege scope boundaries to prevent lateral movement.  
* **Speaker Guidance:** Highlight failure modes where an agent escalates privileges by leveraging shared or over-permissioned service account keys.

## **Sandboxing for AI-DLC & Runtimes**

* **Scope:** Executive and dynamic code execution safety. Performance, isolation, and security tradeoffs across Docker containers, microVMs (e.g., AWS Firecracker), and WebAssembly (Wasm) sandboxes for untrusted agent-generated scripts.  
* **Speaker Guidance:** Benchmark startup latency, memory overhead, and file system isolation mechanisms during runtime tool generation.

## **Agent Gateways & Guardrails**

* **Scope:** Centralized proxy layers enforcing rate limiting, LLM token budget management, dynamic PII masking/redaction, and semantic policy checks prior to external outbound API calls.  
* **Speaker Guidance:** Focus on real-time latency overhead introduced by guardrail proxies and architectural patterns for asynchronous policy evaluation.

## **Agentic Vulnerability Analysis**

* **Scope:** Threat modeling agentic attack vectors: indirect prompt injection embedded within retrieved documents, confused deputy exploits, tool-poisoning attacks, and automated privilege escalation across multi-hop agent chains.  
* **Speaker Guidance:** Walk through real-world attack trees and demonstrate practical mitigation patterns at both the application and gateway layers.

## **Observability, Tracing & Evidence Artifacts**

* **Scope:** Mapping OpenTelemetry (OTel) traces across asynchronous, non-deterministic agent decision trees. Generating cryptographically signed Evidence Artifacts (storing inputs, intermediate reasoning steps, tool calls, and human approvals) for regulatory compliance and post-incident forensic analysis.  
* **Speaker Guidance:** Provide concrete JSON schema structures for span context propagation across heterogeneous agent frameworks.

## **Trajectory & Causality Evaluations**

* **Scope:** Quantitative evaluation methodology for non-deterministic agents. Measuring path optimality (detecting redundant tool usage), trajectory drift, and establishing causality (verifying that retrieved context directly drove the correct action rather than model luck).  
* **Speaker Guidance:** Contrast classical offline evaluation pipelines with continuous production trajectory monitoring.

---

# **4\. Hands-On Workshop Facilitator Guide (MCP & A2A)**

The afternoon hands-on track must provide a seamless, low-friction engineering environment. Technical Assistants (TAs) and facilitators must adhere to the following directives:

## **MCP Workshop Focus (Labs 1 & 1 Continued)**

* **Objective:** Guide participants through constructing an enterprise-ready Model Context Protocol (MCP) server.  
* **Core Modules:**  
  1. Exposing database and internal ticketing endpoints as structured tools and resources.  
  2. Securing transport layers via Server-Sent Events (SSE) and Streamable HTTP with scoped OAuth tokens.  
  3. Implementing defensive input validation to guard against malicious tool descriptions designed to hijack model tool selection logic.

## **A2A Workshop Focus (Labs 2 & 2 Continued)**

* **Objective:** Implement cross-agent interoperability using standard Agent-to-Agent communication protocols.  
* **Core Modules:**  
  1. Publishing and parsing standard Agent Cards (`/.well-known/agent.json`).  
  2. Building event-driven state machines to handle task states (`submitted`, `working`, `input-required`, `completed`, `failed`).  
  3. Enforcing cryptographic attestation checks prior to delegating subtasks to external agent endpoints.  
  4. Wiring an orchestrator agent to remote A2A peers backed by MCP servers using unified trace contexts.

## **Zero-Setup Infrastructure Rule**

To prevent technical delay and local environment troubleshooting, local dependency installs are strictly prohibited.

* **Mandatory Setup:** All attendees must be directed to pre-provisioned, cloud-hosted dev environments.  
* **Delivery:** Provide a single shortlink and QR code at the start of the lab pointing to a GitHub Codespaces template or devcontainer image.  
* **Fallback:** A localized USB flash drive and offline local network mirror containing all pre-cached Docker images, dependencies, and sample datasets must be held on standby by the Lead TA.

---

# **5\. Day-Of Risk Mitigation & Operations Playbook**

## **Live API Latency & Failover Protocol**

Live API calls during keynotes and technical sessions carry inherent risk of rate limiting, model latency spikes, or cloud service degradations.

* **15-Second Rule:** Presenters demonstrating live agent execution must have a visible countdown timer on their confidence monitor.  
* **Failover Execution:** If a live multi-agent execution loop stalls, hangs, or hits a rate-limit error for more than **15 seconds**, the speaker or Stage Manager must immediately switch the display output to the local pre-recorded backup video stream.  
* **Preparation:** All live demos must submit a pre-recorded, high-resolution screen capture of the successful execution path 24 hours prior to the event start.

## **Q\&A Pacing & Audience Management Rule**

Audience Q\&A can derail session timing if physical microphone handling is unmanaged.

* **Microphone Control:** Dedicated mic runners will carry wireless handheld microphones during Q\&A segments.  
* **Strict Rule:** Mic runners must **never hand the physical microphone to an audience member**. The runner holds the microphone while the attendee asks their question and reclaims control immediately.  
* **Timekeeping:** The Stage Manager will issue visual cues (10m, 5m, STOP cards) to the session chair to ensure absolute adherence to the schedule.

## **Volunteer & Staffing Allocations**

```
                                  ┌─────────────────────────┐
                                  │   Event Lead Manager    │
                                  └────────────┬────────────┘
                                               │
         ┌─────────────────────────┬───────────┴───────────┬─────────────────────────┐
         │                         │                       │                         │
┌────────┴────────┐       ┌────────┴────────┐     ┌────────┴────────┐       ┌────────┴────────┐
│  Registration   │       │ Stage & Speaker │     │   Technical TA  │       │ Stream, AV &    │
│   Desk Leads    │       │   Management    │     │      Team       │       │ Catering Float  │
│    (2 - 3)      │       │     (2 - 4)     │     │     (3 - 4)     │       │     (1 - 2)     │
└─────────────────┘       └─────────────────┘     └─────────────────┘       └─────────────────┘
```

* **Registration Desk Leads (2–3 Staff):** Responsible for attendee check-in, badge distribution, credential verification, and initial Wi-Fi onboarding support.  
* **Stage Manager (1 Staff):** Positioned inside the Main Auditorium. Controls timing using physical cards (**10m**, **5m**, **STOP**), manages A/V switches, and enforces session end times.  
* **Speaker Wrangler (1 Staff):** Coordinates speaker prep, manages mic fittings 15 minutes prior to stage entry, and verifies pre-recorded backup demos are staged.  
* **Q\&A Mic Runners (2 Staff):** Distributed across the main auditorium aisles to facilitate audience questions while maintaining physical control of the microphones.  
* **Workshop Technical TAs (3–4 Staff):** Stationed in the Hands-On Lab track. Maintained at a strict **1:25 TA-to-attendee ratio** to assist with environment onboarding, code debugging, and task verification.  
* **Stream & Catering Floater (1–2 Staff):** Oversees hallway logistics, monitors catering/coffee replenishment, and manages room overflow logic.

