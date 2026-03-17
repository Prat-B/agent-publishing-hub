# Scope Definition

## Objective
Build a lightweight prototype to track agent publishing metrics and surface contextual, actionable insights directly within user workflows.

## Core Principles
- Metrics must be **visible and actionable in UI**
- AI insights are **embedded within dashboards**, not separate
- Support both:
  - Agent-level debugging
  - System-level observability

---

## In Scope

### 1. Agent-Level Dashboard (Primary)

**Publishing Timeline**
- Stages: Submission → Validation → Review → Publish
- Status per stage
- Stage-wise time

**Failure & Debugging**
- Validation failures
- Rejection reasons
- Resubmission count

**Embedded AI Insights**
- Failure explanation (plain English)
- Suggested fixes
- Pre-submission risk hints (mocked)

**Post-Publish Monitoring**
- Alerts for:
  - Failures
  - Policy violations
  - Performance drops

---

### 2. System-Level Dashboard (Ops View)

**Metric Cards**
- Submission volume
- Validation failure rate
- Approval rate
- Avg time to publish

**Breakdowns**
- Partner performance
- Failure reasons distribution
- Rejection categories

**Trends**
- Stage-wise delays
- Failure spikes

**Embedded AI Insights**
- Anomaly detection (spikes)
- Root cause summaries
- Partner-level insights

---

### 3. Shared Components

**Insights & Alerts (Embedded)**
- Displayed as:
  - Inline cards
  - Banners
  - Alerts
- Contextual to:
  - Agent
  - Metric / chart

---

## Out of Scope
- Real-time backend systems
- Live pipelines / streaming
- Authentication / RBAC
- Real AI models (use static/mock insights)

---

## Success Criteria
- User can quickly understand:
  - Agent status and issues
  - System health and bottlenecks
- Metrics directly lead to **clear actions**
- AI insights feel **contextual and helpful**, not separate or generic
