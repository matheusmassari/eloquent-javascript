const loc = [
    {
        location_key: [32, 22, 11],
        autoassing: 1,
    },
    {
        location_key: [41, 42],
        autoassing: 1,
    },
];

const bulkConfig = [
    {
        dataValues: {
            config_key: 100,
        },
    },
    {
        dataValues: {
            config_key: 200,
        },
    },
];

// Map everything to [{config_key: 100, location_key: 32, autoassign: 1}, {config_key: 100, location_key: 22, autoassign: 1}]
// Result must be an array with 5 objects

const result = loc
    .map((locEl, index) => {
        return locEl.location_key.map((locationKey) => {
            return {
                location_key: locationKey,
                autoassing: locEl.autoassing,
                config_key: bulkConfig[index].dataValues.config_key,
            };
        });
    })
    .reduce((arr, acc) => arr.concat(acc), []);

console.log(result);
