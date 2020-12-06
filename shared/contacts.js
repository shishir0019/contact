ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
            resolve(results);
        },
            (error) => {
                reject(error);
            });
    });
});

const createTable = async (tableName) => {
    let sql = `CREATE TABLE IF NOT EXISTS ${tableName} (
        id INTEGER PRIMARY KEY NOT NULL,
        first_name VARCHAR(16),
        sur_name VARCHAR(16),
        email VARCHAR(16),
        job VARCHAR(16),
        mobile VARCHAR(16),
        note VARCHAR(16),
        avatar_urls VARCHAR(16),
        meta VARCHAR(16)`
    let Table = await this.executeQuery(sql, []);
    console.log(Table);
}

createTable('contacts');



// const allContact = () => {
//     db.transaction(tx => {
//         let sql = 'Select * from contacts'
//         tx.executeSql(
//             sql,
//             [],
//             contacts => {
//                 console.log('contact: ' + contacts);
//             },
//             (tx, err) => {
//                 console.dir('error: ' + err.message);
//             })
//     }, error => {
//         console.log(error);
//     }, success => {
//         console.log(success);
//     })
// }

// allContact();

// export const list = [
//     {
//         id: 1,
//         name: 'Asaduzzaman Shishir',
//         number: '01717605715',
//         sex: 'male',
//         category: 'friend',
//         email: 'shishir0019@gmail.com'
//     },
//     {
//         id: 2,
//         name: 'Sermeen Sultana Nipa',
//         number: '01717605713',
//         sex: 'female',
//         category: 'friend',
//         email: 'sarmeen.nipa@gmail.com'
//     },
//     {
//         id: 3,
//         name: 'Mizanur Rahman',
//         number: '01711604410',
//         sex: 'male',
//         category: 'friend',
//         email: 'mizanur_rahman@gmail.com'
//     },
//     {
//         id: 4,
//         name: 'Mustafizur Rahman',
//         number: '01718312223',
//         sex: 'male',
//         category: 'friend',
//         email: 'mostafiz_sohag@gmail.com'
//     },
//     {
//         id: 5,
//         name: 'Sayed Muktadir',
//         number: '01718332223',
//         sex: 'male',
//         category: 'friend',
//         email: 'sayed_islam@gmail.com'
//     },
//     {
//         id: 6,
//         name: 'Asaduzzaman Shishir',
//         number: '01717605715',
//         sex: 'male',
//         category: 'friend',
//         email: 'shishir0019@gmail.com'
//     },
//     {
//         id: 7,
//         name: 'Sermeen Sultana Nipa',
//         number: '01717605713',
//         sex: 'female',
//         category: 'friend',
//         email: 'sarmeen.nipa@gmail.com'
//     },
//     {
//         id: 8,
//         name: 'Mizanur Rahman',
//         number: '01711604410',
//         sex: 'male',
//         category: 'friend',
//         email: 'mizanur_rahman@gmail.com'
//     },
//     {
//         id: 9,
//         name: 'Mustafizur Rahman',
//         number: '01718312223',
//         sex: 'male',
//         category: 'friend',
//         email: 'mostafiz_sohag@gmail.com'
//     },
//     {
//         id: 10,
//         name: 'Sayed Muktadir',
//         number: '01718332223',
//         sex: 'male',
//         category: 'friend',
//         email: 'sayed_islam@gmail.com'
//     },
//     {
//         id: 11,
//         name: 'Asaduzzaman Shishir',
//         number: '01717605715',
//         sex: 'male',
//         category: 'friend',
//         email: 'shishir0019@gmail.com'
//     },
//     {
//         id: 12,
//         name: 'Sermeen Sultana Nipa',
//         number: '01717605713',
//         sex: 'female',
//         category: 'friend',
//         email: 'sarmeen.nipa@gmail.com'
//     },
//     {
//         id: 13,
//         name: 'Mizanur Rahman',
//         number: '01711604410',
//         sex: 'male',
//         category: 'friend',
//         email: 'mizanur_rahman@gmail.com'
//     },
//     {
//         id: 14,
//         name: 'Mustafizur Rahman',
//         number: '01718312223',
//         sex: 'male',
//         category: 'friend',
//         email: 'mostafiz_sohag@gmail.com'
//     },
//     {
//         id: 15,
//         name: 'Sayed Muktadir',
//         number: '01718332223',
//         sex: 'male',
//         category: 'friend',
//         email: 'sayed_islam@gmail.com'
//     },
// ]