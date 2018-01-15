
function getExpertClassification(data) {
  const demographic = data.demographic || {};
  if(demographic['work-as-design-professional'] == 'No') {
    return 'novice'
  } else if(demographic['years-worked-as-expert'] == '1') {
    return 'unknown'
  }
  return 'expert'
}


