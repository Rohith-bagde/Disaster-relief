export const analyzeEmergency = (
  title,
  description
) => {

  const text =
    `${title} ${description}`.toLowerCase()

  // =========================
  // CATEGORY DETECTION
  // =========================
  let category = 'General'

  if (
    text.includes('flood') ||
    text.includes('water')
  ) {
    category = 'Flood'
  }

  else if (
    text.includes('fire') ||
    text.includes('smoke')
  ) {
    category = 'Fire'
  }

  else if (
    text.includes('accident') ||
    text.includes('crash')
  ) {
    category = 'Accident'
  }

  else if (
    text.includes('medical') ||
    text.includes('ambulance')
  ) {
    category = 'Medical'
  }

  // =========================
  // SEVERITY DETECTION
  // =========================
  let severity = 'LOW'

  if (
    text.includes('urgent') ||
    text.includes('trapped') ||
    text.includes('critical')
  ) {
    severity = 'CRITICAL'
  }

  else if (
    text.includes('injured') ||
    text.includes('fire')
  ) {
    severity = 'HIGH'
  }

  else if (
    text.includes('help')
  ) {
    severity = 'MEDIUM'
  }

  // =========================
  // AI RECOMMENDATIONS
  // =========================
  let recommendation =
    'Monitor situation carefully.'

  if (category === 'Flood') {
    recommendation =
      'Deploy rescue boats and evacuation team.'
  }

  if (category === 'Fire') {
    recommendation =
      'Dispatch fire brigade immediately.'
  }

  if (category === 'Medical') {
    recommendation =
      'Send ambulance and medical support.'
  }

  if (category === 'Accident') {
    recommendation =
      'Alert nearby responders and police.'
  }

  return {
    category,
    severity,
    recommendation,
  }
}