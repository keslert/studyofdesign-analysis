

export function run() {
  analyzeIndividuals();
}

function analyzeIndividuals() {

}

function isLegit(data) {
  return (
    data['pilot'] !== true &&
    data['country'] === 'US' &&
    data['post_survey']['truthful'] == 'Yes' &&
    data['post_survey']['technical-errors'] == 'No'
  )
}