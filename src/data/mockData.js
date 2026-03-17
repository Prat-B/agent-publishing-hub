export const agents = [
  {
    id: "agt_001",
    name: "Customer Support Bot",
    partner: "Acme Corp",
    status: "published",
    created_at: "2024-03-12T10:00:00Z",
    stages: [
      { stage: "submission", status: "completed", start_time: "2024-03-12T10:00:00Z", end_time: "2024-03-12T10:05:00Z", duration_minutes: 5 },
      { stage: "validation", status: "completed", start_time: "2024-03-12T10:05:00Z", end_time: "2024-03-12T10:15:00Z", duration_minutes: 10 },
      { stage: "review", status: "completed", start_time: "2024-03-12T10:15:00Z", end_time: "2024-03-14T14:00:00Z", duration_minutes: 3105 },
      { stage: "publish", status: "completed", start_time: "2024-03-14T14:00:00Z", end_time: "2024-03-14T14:10:00Z", duration_minutes: 10 }
    ],
    metrics: { total_submissions: 1, validation_failures: 0, rejections: 0, resubmissions: 0, time_to_publish_minutes: 3130 },
    insights: [
      { id: "ins_1", type: "success", title: "Smooth Publishing", description: "Agent bypassed manual review due to trusted partner status.", severity: "low" }
    ],
    alerts: []
  },
  {
    id: "agt_002",
    name: "Sales Assistant AI",
    partner: "Globex Inc",
    status: "validation_failed",
    created_at: "2024-03-15T09:00:00Z",
    stages: [
      { stage: "submission", status: "completed", start_time: "2024-03-15T09:00:00Z", end_time: "2024-03-15T09:02:00Z", duration_minutes: 2 },
      { stage: "validation", status: "failed", start_time: "2024-03-15T09:02:00Z", end_time: "2024-03-15T09:05:00Z", duration_minutes: 3, failure_reason: "Missing required manifest fields (logo_url)" },
      { stage: "review", status: "pending" },
      { stage: "publish", status: "pending" }
    ],
    metrics: { total_submissions: 1, validation_failures: 1, rejections: 0, resubmissions: 0, time_to_publish_minutes: null },
    insights: [
      { id: "ins_2", type: "error", title: "Validation Error", description: "Manifest is missing 'logo_url'. Expected a valid HTTPS URL.", severity: "high", suggested_fix: "Add a valid HTTPS logo_url to manifest.json" },
      { id: "ins_3", type: "warning", title: "Risk Prediction", description: "Globex Inc normally fails validation 15% of the time due to missing assets.", severity: "medium" }
    ],
    alerts: []
  },
  {
    id: "agt_003",
    name: "HR Onboarding Pro",
    partner: "Initech",
    status: "in_review",
    created_at: "2024-03-10T11:00:00Z",
    stages: [
      { stage: "submission", status: "completed", start_time: "2024-03-10T11:00:00Z", end_time: "2024-03-10T11:05:00Z", duration_minutes: 5 },
      { stage: "validation", status: "completed", start_time: "2024-03-10T11:05:00Z", end_time: "2024-03-10T11:20:00Z", duration_minutes: 15 },
      { stage: "review", status: "in_progress", start_time: "2024-03-10T11:20:00Z", end_time: null, duration_minutes: null, rejection_reason: "First attempt rejected: Policy violation - improper data handling mentioned in description." },
      { stage: "publish", status: "pending" }
    ],
    metrics: { total_submissions: 2, validation_failures: 0, rejections: 1, resubmissions: 1, time_to_publish_minutes: null },
    insights: [
      { id: "ins_4", type: "warning", title: "Policy Rejection History", description: "Agent was rejected once previously due to data handling policy.", severity: "high", suggested_fix: "Ensure updated description clarifies PII is not collected." }
    ],
    alerts: []
  },
  {
    id: "agt_004",
    name: "IT Ticketing Helper",
    partner: "Umbrella Corp",
    status: "published",
    created_at: "2024-03-01T08:00:00Z",
    stages: [
      { stage: "submission", status: "completed", start_time: "2024-03-01T08:00:00Z", end_time: "2024-03-01T08:05:00Z", duration_minutes: 5 },
      { stage: "validation", status: "completed", start_time: "2024-03-01T08:05:00Z", end_time: "2024-03-01T08:15:00Z", duration_minutes: 10 },
      { stage: "review", status: "completed", start_time: "2024-03-01T08:15:00Z", end_time: "2024-03-02T10:00:00Z", duration_minutes: 1545 },
      { stage: "publish", status: "completed", start_time: "2024-03-02T10:00:00Z", end_time: "2024-03-02T10:10:00Z", duration_minutes: 10 }
    ],
    metrics: { total_submissions: 1, validation_failures: 0, rejections: 0, resubmissions: 0, time_to_publish_minutes: 1570 },
    insights: [],
    alerts: [
      { id: "al_1", type: "performance", message: "High latency detected in endpoint responses post-publish.", severity: "high", timestamp: "2024-03-18T08:30:00Z" }
    ]
  }
];

export const systemMetrics = {
  submission_volume: 1245,
  validation_failure_rate: 18.5, // %
  approval_rate: 76.2, // %
  avg_time_to_publish_minutes: 2880, // 48 hours
  sla_breach_rate: 5.2, // %
};

export const partnerMetrics = [
  { partner_name: "Acme Corp", total_agents: 45, success_rate: 95.5, failure_rate: 4.5, avg_time_to_publish: 1440 },
  { partner_name: "Globex Inc", total_agents: 82, success_rate: 72.0, failure_rate: 28.0, avg_time_to_publish: 4320 },
  { partner_name: "Initech", total_agents: 15, success_rate: 60.0, failure_rate: 40.0, avg_time_to_publish: 5760 },
  { partner_name: "Umbrella Corp", total_agents: 120, success_rate: 88.5, failure_rate: 11.5, avg_time_to_publish: 2160 }
];

export const stageMetrics = [
  { stage: "submission", avg_time_minutes: 5, sla_threshold_minutes: 10, sla_breach_percentage: 0.1 },
  { stage: "validation", avg_time_minutes: 12, sla_threshold_minutes: 30, sla_breach_percentage: 2.5 },
  { stage: "review", avg_time_minutes: 2200, sla_threshold_minutes: 2880, sla_breach_percentage: 12.0 },
  { stage: "publish", avg_time_minutes: 15, sla_threshold_minutes: 60, sla_breach_percentage: 0.5 }
];

export const failureReasons = [
  { category: "Missing Manifest Fields", count: 145, percentage: 45.3 },
  { category: "Policy Violation: Descriptions", count: 85, percentage: 26.5 },
  { category: "Endpoint Timeout", count: 55, percentage: 17.1 },
  { category: "Invalid Logo Assets", count: 35, percentage: 11.1 }
];

export const systemInsights = [
  { id: "sys_ins_1", context_type: "system", title: "Anomaly Detected", description: "150% spike in validation failures due to missing manifest fields in the last 24h.", severity: "high" },
  { id: "sys_ins_2", context_type: "partner", title: "Partner Bottleneck", description: "Initech's rejection rate is trending upwards. Consider reaching out with updated documentation.", severity: "medium" },
  { id: "sys_ins_3", context_type: "stage", title: "Review Delays", description: "Average manual review time increased by 8 hours over the weekend SLA.", severity: "low" }
];
