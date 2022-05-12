// add whatever parameters you deem necessary & write docstring
function twoArrayObject(keys, values) {
    let results = {};

    for( let i = 0; i < keys.length; i++){
        results[keys[i]] = values[i] || null;
    }

    return results;
}
