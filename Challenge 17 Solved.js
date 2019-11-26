const judgeVegetable = (vegetables, metric) => {
  
let bestVegetable = {
    submitter: '',
    metricValue: 0 
};

for (const vegetable of vegetables) {
    if (vegetable[metric] > bestVegetable.metricValue) {
    bestVegetable.submitter = vegetable.submitter;
    bestVegetable.metricValue = vegetable[metric];
    }
}

return bestVegetable.submitter;
};  