export enum Severity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export interface Symptom {
  id: string;
  terms: string[];
  severity: Severity;
  requiresEmergency: boolean;
}

export interface Condition {
  id: string;
  name: string;
  symptoms: string[];
  advice: string;
  severity: Severity;
}

export interface AnalysisResult {
  conditions: Condition[];
  severity: Severity;
  requiresEmergency: boolean;
}