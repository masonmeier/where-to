const countriesArray =
  [
    {
      iso: 22,
      country: 'Central African Republic',
      gdp_pc: 700,
      gpi_rank: 151,
      percentage_non_religious: 0,
      happiness_score: 2.693,
      top_100_universities: 0,
      collegiate_completion_rate_top_: 0,
      high_school_completion_rate: 0,
      top_rated_overall_education: 0,
      spiciest_food: 0,
      communist_nation: 0,
      most_temperate_nations: 0,
      coldest_nations: 0,
      best_beaches: 0,
      high_economic_freedom: 0,
      best_health_care: 0,
      best_internet_infrastructure: 0,
      highest_pop_density: 0,
      least_corrupt: 0,
    },
    {
      iso: 149,
      country: 'United States of America',
      gdp_pc: 47200,
      gpi_rank: 88,
      percentage_non_religious: 15.1,
      happiness_score: 6.993,
      top_100_universities: 1,
      collegiate_completion_rate_top_: 2,
      high_school_completion_rate: 0,
      top_rated_overall_education: 0,
      spiciest_food: 0,
      communist_nation: 0,
      most_temperate_nations: 0,
      coldest_nations: 1,
      best_beaches: 7,
      high_economic_freedom: 0,
      best_health_care: 0,
      best_internet_infrastructure: 9,
      highest_pop_density: 0,
      least_corrupt: 0,
    },
    {
      iso: 127,
      country: 'Singapore',
      gdp_pc: 62100,
      gpi_rank: 23,
      percentage_non_religious: 13,
      happiness_score: 6.572,
      top_100_universities: 0,
      collegiate_completion_rate_top_: 0,
      high_school_completion_rate: 0,
      top_rated_overall_education: 0,
      spiciest_food: 0,
      communist_nation: 0,
      most_temperate_nations: 0,
      coldest_nations: 0,
      best_beaches: 0,
      high_economic_freedom: 1,
      best_health_care: 0,
      best_internet_infrastructure: 6,
      highest_pop_density: 1,
      least_corrupt: 0,
    },
  ];
const questionValues = [
  {
    text: 'How important is it that you make as much money as possible',
    quality: 'gdp_pc',
    inputType: 'range',
    inputReference: 'qSlider',
    leftVal: 'Not Important',
    rightVal: 'Very Important',
    className: 'sliderInput',
    // minVal: '300',
    // maxVal: '62100'
  },
  {
    text: 'It is important to me that the government I live under values peace above all things.',
    quality: 'gpi_rank',
    inputType: 'range',
    inputReference: 'qSlider',
    leftVal: 'Not Important',
    rightVal: 'Very Important',
    className: 'sliderInput',
    // minVal: '1',
    // maxVal: '158'
  },
  {
    text: 'It is important that I live in a nation with as few religious people as possible.',
    quality: 'percentage_non_religious',
    inputType: 'range',
    inputReference: 'qSlider',
    leftVal: 'Not Important',
    rightVal: 'Very Important',
    className: 'sliderInput',

  },
  {
    text: 'I want everyone around me to be as happy as possible.',
    quality: 'happiness_score',
    inputType: 'range',
    inputReference: 'qSlider',
    leftVal: 'Not Important',
    rightVal: 'Very Important',
    className: 'sliderInput'
  },
];

function findMinMaxValue() {
  questionValues.forEach((question) => {
    const minMax = findMinMaxForField(question.quality);
    question.minVal = minMax.filteredArrayMin;
    question.maxVal = minMax.filteredArrayMax;
  });
  console.log('findMinMax Sanity Check', questionValues);
}


function findMinMaxForField(field) {
  const fieldMap = countriesArray.map((country) => country[field]);
  const filteredArrayMax = Math.max(...fieldMap);
  const filteredArrayMin = Math.min(...fieldMap);
  return (
    {filteredArrayMin, filteredArrayMax}
  );
};

findMinMaxValue();


