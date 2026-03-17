# Data Schemas

---

## Agent

- id: string
- name: string
- partner: string
- status: enum (submitted, validation_failed, in_review, approved, published)
- created_at: datetime

---

## AgentStage

- id: string
- agent_id: string
- stage: enum (submission, validation, review, publish)
- status: enum (pending, in_progress, completed, failed)
- start_time: datetime
- end_time: datetime
- duration_minutes: number
- failure_reason: string (optional)
- rejection_reason: string (optional)

---

## AgentMetrics

- agent_id: string
- total_submissions: number
- validation_failures: number
- rejections: number
- resubmissions: number
- time_to_publish_minutes: number

---

## SystemMetrics (Aggregated)

- date: datetime
- submission_volume: number
- validation_failure_rate: float
- approval_rate: float
- avg_time_to_publish_minutes: number
- sla_breach_rate: float

---

## StageMetrics

- stage: enum (submission, validation, review, publish)
- avg_time_minutes: number
- sla_threshold_minutes: number
- sla_breach_percentage: number

---

## PartnerMetrics

- partner_name: string
- total_agents: number
- success_rate: float
- failure_rate: float
- avg_time_to_publish: number

---

## FailureReason (Aggregated)

- category: string
- count: number
- percentage: float

---

## Insight (Embedded AI Insight)

- id: string
- context_type: enum (agent, system, partner, stage)
- context_id: string (agent_id / partner_name / stage)
- title: string
- description: string
- severity: enum (low, medium, high)
- created_at: datetime

---

## Alert

- id: string
- type: enum (failure, policy, performance, anomaly)
- message: string
- severity: enum (low, medium, high)
- timestamp: datetime
- agent_id: string (optional)
- partner_name: string (optional)

---

## Event (Optional - for realism)

- id: string
- agent_id: string
- stage: string
- event_type: string (submitted, validation_failed, approved, etc.)
- timestamp: datetime
