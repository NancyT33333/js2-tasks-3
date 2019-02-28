/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {

    let promises=[];
if (operations.length ==0) { callback (null, []) }

else {
    for (let i in operations) {
        let promise = new Promise((resolve, reject) => {
            operations[i](next);


            function next(err, data) {
                (err != null) ? reject(err) : resolve(data);
            }

        });
        promises.push(promise);
    }

    Promise.all(promises)
        .then(function (result) {
            callback(null, result)
        })
        .catch(function (error) {
            callback(error, null)
        })
}
};

