import React from 'react';

const CountryData =
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

// `err` and `cb` are Error and Success callbacks
export default function getCountryData() {
    /*
    sql connection can go here.
    return new Promise((resolve, reject) => {
        connect({ sqlOptions: '' }, function (sqlError, sqlData) {
            if (sqlError) {
                reject(sqlError);
            }
            else {
                resolve(sqlData);
            }
        });
    });

     */
    return Promise.resolve(CountryData);
};