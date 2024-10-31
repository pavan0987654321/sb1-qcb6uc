import { symptoms, conditions } from './medicalKnowledge';
import { AnalysisResult, Severity, Symptom, Condition } from '../types/medical';

export class SymptomAnalyzer {
  private static findSymptoms(text: string): Symptom[] {
    const normalizedText = text.toLowerCase();
    const words = normalizedText.split(/\s+/);
    const detectedSymptoms = new Set<Symptom>();

    symptoms.forEach(symptom => {
      if (symptom.terms.some(term => {
        // Check for exact matches
        if (normalizedText.includes(term)) return true;
        
        // Check for partial matches with word boundaries
        const termWords = term.split(/\s+/);
        return termWords.every(word => words.some(w => w.includes(word)));
      })) {
        detectedSymptoms.add(symptom);
      }
    });

    return Array.from(detectedSymptoms);
  }

  private static findConditions(detectedSymptoms: Symptom[]): Condition[] {
    const symptomIds = new Set(detectedSymptoms.map(s => s.id));
    const matchedConditions = new Set<Condition>();

    conditions.forEach(condition => {
      // Check if any of the condition's symptoms match
      const hasMatchingSymptoms = condition.symptoms.some(symptomId => 
        symptomIds.has(symptomId)
      );

      if (hasMatchingSymptoms) {
        matchedConditions.add(condition);
      }
    });

    // Sort conditions by severity (HIGH -> MEDIUM -> LOW)
    return Array.from(matchedConditions).sort((a, b) => {
      const severityOrder = { [Severity.HIGH]: 0, [Severity.MEDIUM]: 1, [Severity.LOW]: 2 };
      return severityOrder[a.severity] - severityOrder[b.severity];
    });
  }

  private static calculateSeverity(
    detectedSymptoms: Symptom[],
    matchedConditions: Condition[]
  ): Severity {
    // Check for any high severity symptoms or conditions
    if (
      detectedSymptoms.some(s => s.severity === Severity.HIGH) ||
      matchedConditions.some(c => c.severity === Severity.HIGH)
    ) {
      return Severity.HIGH;
    }

    // Check for medium severity
    if (
      detectedSymptoms.some(s => s.severity === Severity.MEDIUM) ||
      matchedConditions.some(c => c.severity === Severity.MEDIUM)
    ) {
      return Severity.MEDIUM;
    }

    // Default to low severity
    return Severity.LOW;
  }

  private static requiresEmergencyResponse(
    detectedSymptoms: Symptom[],
    matchedConditions: Condition[]
  ): boolean {
    return (
      detectedSymptoms.some(s => s.requiresEmergency) ||
      matchedConditions.some(c => c.severity === Severity.HIGH)
    );
  }

  static analyzeSymptoms(text: string): AnalysisResult {
    const detectedSymptoms = this.findSymptoms(text);
    const matchedConditions = this.findConditions(detectedSymptoms);
    
    return {
      conditions: matchedConditions,
      severity: this.calculateSeverity(detectedSymptoms, matchedConditions),
      requiresEmergency: this.requiresEmergencyResponse(detectedSymptoms, matchedConditions),
    };
  }
}