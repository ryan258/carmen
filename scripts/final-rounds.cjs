// Pack-level report descriptors. CarmenCore.finalRounds fills the live questions
// from selected cases; these descriptors contain no independent factual claims.
module.exports = () => [
  {title:'First-stop evidence review',description:'Review the written evidence from the first selected case.',
   question:'Which answer matches the first case evidence?',options:['Selected case answer','Case alternative 1','Case alternative 2','Case alternative 3'],correctIndex:0,
   explanation:'The live report copies the selected first case, including its choices, correct index, and explanation.'},
  {title:'Route evidence review',description:'Review the written evidence from a case in the middle of the selected route.',
   question:'Which answer matches the route evidence?',options:['Selected case answer','Case alternative 1','Case alternative 2','Case alternative 3'],correctIndex:0,
   explanation:'The live report copies the selected middle case, including its choices, correct index, and explanation.'},
  {title:'Route inventory',description:'Use the collected tokens from your completed route.',
   question:'Which token came from the last completed stop?',options:['Last stop token','First stop token','Second stop token','Third stop token'],correctIndex:0,
   explanation:'The live report resolves the last token and three other tokens from the completed route.'}
];
