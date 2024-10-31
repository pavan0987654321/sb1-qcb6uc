import { Condition, Symptom, Severity } from '../types/medical';

export const symptoms: Symptom[] = [
  // Cardiovascular
  {
    id: 'chest_pain',
    terms: ['chest pain', 'chest pressure', 'chest tightness', 'heart pain', 'chest discomfort', 'angina'],
    severity: Severity.HIGH,
    requiresEmergency: true,
  },
  // Respiratory
  {
    id: 'difficulty_breathing',
    terms: ['difficulty breathing', 'shortness of breath', 'can\'t breathe', 'breathing problem', 'wheezing', 'dyspnea'],
    severity: Severity.HIGH,
    requiresEmergency: true,
  },
  // Neurological
  {
    id: 'severe_headache',
    terms: ['severe headache', 'worst headache', 'sudden headache', 'thunderclap headache', 'migraine', 'head pain'],
    severity: Severity.HIGH,
    requiresEmergency: true,
  },
  {
    id: 'dizziness',
    terms: ['dizziness', 'vertigo', 'lightheaded', 'feeling faint', 'room spinning', 'balance problems'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  // General
  {
    id: 'fever',
    terms: ['fever', 'high temperature', 'feeling hot', 'chills', 'sweating', 'temperature'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  // Gastrointestinal
  {
    id: 'abdominal_pain',
    terms: ['stomach pain', 'abdominal pain', 'belly pain', 'gut pain', 'digestive pain', 'stomach cramps'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  {
    id: 'nausea',
    terms: ['nausea', 'feeling sick', 'vomiting', 'throwing up', 'stomach upset'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  // Musculoskeletal
  {
    id: 'joint_pain',
    terms: ['joint pain', 'arthritis', 'stiff joints', 'joint swelling', 'joint stiffness'],
    severity: Severity.LOW,
    requiresEmergency: false,
  },
  {
    id: 'back_pain',
    terms: ['back pain', 'backache', 'spine pain', 'lower back pain', 'upper back pain'],
    severity: Severity.LOW,
    requiresEmergency: false,
  },
  // Mental Health
  {
    id: 'anxiety',
    terms: ['anxiety', 'panic', 'worry', 'stress', 'nervousness', 'panic attack'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  // Skin
  {
    id: 'rash',
    terms: ['rash', 'skin irritation', 'itching', 'hives', 'skin problem', 'dermatitis'],
    severity: Severity.LOW,
    requiresEmergency: false,
  },
  // ENT
  {
    id: 'sore_throat',
    terms: ['sore throat', 'throat pain', 'difficulty swallowing', 'strep throat', 'throat irritation'],
    severity: Severity.LOW,
    requiresEmergency: false,
  },
  // Vision
  {
    id: 'vision_changes',
    terms: ['vision changes', 'blurred vision', 'double vision', 'vision loss', 'eye problem'],
    severity: Severity.HIGH,
    requiresEmergency: true,
  },
];

export const conditions: Condition[] = [
  // Cardiovascular Conditions
  {
    id: 'heart_attack',
    name: 'Possible Heart Attack',
    symptoms: ['chest_pain'],
    advice: 'CALL EMERGENCY SERVICES (911) IMMEDIATELY!\n\nPossible heart attack symptoms detected. While waiting:\n- Sit or lie down\n- Take aspirin if available and not allergic\n- Loosen tight clothing\n- Stay calm and try to relax\n\nDo not drive yourself to the hospital.',
    severity: Severity.HIGH,
  },
  // Neurological Conditions
  {
    id: 'stroke',
    name: 'Possible Stroke',
    symptoms: ['severe_headache', 'vision_changes', 'dizziness'],
    advice: 'CALL EMERGENCY SERVICES (911) IMMEDIATELY!\n\nPossible stroke symptoms detected. Remember FAST:\nF - Face drooping\nA - Arm weakness\nS - Speech difficulty\nT - Time to call emergency\n\nNote the time symptoms started.',
    severity: Severity.HIGH,
  },
  {
    id: 'migraine',
    name: 'Possible Migraine',
    symptoms: ['severe_headache', 'vision_changes', 'nausea'],
    advice: '- Rest in a quiet, dark room\n- Apply cold or warm compress to head/neck\n- Stay hydrated\n- Take prescribed migraine medication if available\n- Consider over-the-counter pain relievers\n\nSeek medical attention if this is your worst headache ever or symptoms are unusual for you.',
    severity: Severity.MEDIUM,
  },
  // Respiratory Conditions
  {
    id: 'respiratory_distress',
    name: 'Respiratory Distress',
    symptoms: ['difficulty_breathing'],
    advice: 'SEEK IMMEDIATE MEDICAL ATTENTION!\n\nBreathing difficulties can be life-threatening. While waiting:\n- Sit upright\n- Loosen tight clothing\n- Stay calm and take slow breaths\n- Use prescribed inhaler if available\n\nIf symptoms worsen, call 911.',
    severity: Severity.HIGH,
  },
  // General Conditions
  {
    id: 'fever_condition',
    name: 'Fever',
    symptoms: ['fever'],
    advice: 'Monitor temperature and:\n- Rest\n- Stay hydrated with water and clear fluids\n- Take fever reducers if temperature is high\n- Use light clothing and blankets\n\nSeek immediate care if:\n- Temperature exceeds 103°F (39.4°C)\n- Fever lasts more than 3 days\n- Mental confusion occurs',
    severity: Severity.MEDIUM,
  },
  // Gastrointestinal Conditions
  {
    id: 'gastroenteritis',
    name: 'Possible Gastroenteritis',
    symptoms: ['nausea', 'abdominal_pain'],
    advice: '- Stay hydrated with small sips of water or oral rehydration solutions\n- Rest your stomach for a few hours\n- Gradually introduce bland foods\n- Avoid dairy, caffeine, and fatty foods\n\nSeek medical attention if:\n- Unable to keep liquids down\n- Severe pain\n- Signs of dehydration appear',
    severity: Severity.MEDIUM,
  },
  // Musculoskeletal Conditions
  {
    id: 'back_problem',
    name: 'Back Pain',
    symptoms: ['back_pain'],
    advice: '- Apply ice for first 24-48 hours, then heat\n- Gentle stretching if comfortable\n- Over-the-counter pain relievers if needed\n- Maintain good posture\n- Avoid heavy lifting\n\nSeek medical attention if:\n- Pain is severe or getting worse\n- Numbness or tingling occurs\n- Affects bladder/bowel function',
    severity: Severity.LOW,
  },
  // Mental Health
  {
    id: 'anxiety_attack',
    name: 'Possible Anxiety Attack',
    symptoms: ['anxiety'],
    advice: '- Practice deep breathing exercises\n- Find a quiet place if possible\n- Focus on something specific in your environment\n- Call a trusted friend or family member\n- Use grounding techniques (5-4-3-2-1 method)\n\nIf anxiety is severe or frequent:\n- Consider consulting a mental health professional\n- Discuss treatment options with your doctor',
    severity: Severity.MEDIUM,
  },
  // Skin Conditions
  {
    id: 'skin_reaction',
    name: 'Skin Reaction',
    symptoms: ['rash'],
    advice: '- Avoid scratching\n- Apply cool compress\n- Try over-the-counter antihistamines\n- Use calamine lotion if available\n- Keep affected area clean and dry\n\nSeek immediate medical attention if:\n- Rash spreads rapidly\n- Accompanied by fever\n- Blistering occurs\n- Difficulty breathing develops',
    severity: Severity.LOW,
  },
  // ENT Conditions
  {
    id: 'throat_infection',
    name: 'Possible Throat Infection',
    symptoms: ['sore_throat', 'fever'],
    advice: '- Gargle with warm salt water\n- Stay hydrated\n- Use throat lozenges\n- Rest your voice\n- Consider over-the-counter pain relievers\n\nSeek medical attention if:\n- Difficulty breathing or swallowing\n- Severe pain\n- Fever over 101°F (38.3°C)\n- White patches in throat',
    severity: Severity.MEDIUM,
  },
];