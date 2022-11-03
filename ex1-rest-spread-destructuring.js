 // Bài 1: Sử dụng rest Viết hàm cộng tổng các số, số lượng toán hạng truyền vào chưa biết
// Ví dụ:
// sum(1, 2) kết quả: 3
// sum(1,2,3) kết quả: 6
// sum(1,2,3,4,5) kết quả: 15

// Bài 2 (Rest + destructuring): Cho dữ liệu như sau:
// const MaBuiChinh = [
//   {code: [84, 02, 35, 49, 95], name: 'David'},
//   {code: [01, 85, 35, 49, 95, 45, 23], name: 'Mai'},
//   {code: [36, 02, 35, 49, 95, 02], name: 'Rodel'},
//   {code: [94, 04, 35, 49, 95,], name: 'Layton'},
//   {code: [56, 04, 35, 49, 95, 06], name: 'Nhi'},
// ] 

// trong đó code là một mảng có phần tử đầu tiên là MÃ QUỐC GIA, phần tử thứ 2 là MÃ THÀNH PHỐ, các phần tử còn lại là MÃ VÙNG MIỀN tuỳ khu vực nên có số lượng khác nhau
// yêu cầu: Lấy ra danh sách mã vùng miền

// kết quả: [
//   [35, 49, 95],
//   [35, 49, 95, 45, 23],
//   [35, 49, 95, 02],
//   [35, 49, 95,],
//   [35, 49, 95, 06],
// ]

// Bài 3: viết hàm ghép 2 mảng dùng spread:
// a. [1, 2], [3, 4] => [1, 2, 3, 4]
// viết hàm ghép 2 đối tượng thành một đối tượng
// {name: 'david', age: '29'}, {homeTown: 'Ha Noi', gender: 1} => {name: 'david', age: '29', homeTown: 'Ha Noi', gender: 1}
// bai 1
// function sum(...rest){
//     console.log(rest);
//     return rest.reduce((total, value)=>{
//         // console.log(current);
//         return total + value;
//     },0)
// }
// console.log(sum(2,3,4))
// bai 2
// function maBuuChinh(arr){
//     return arr.map((item)=>{
//         [a,b,...rest]=item.code
//         return rest
//     })
// }
// console.log(maBuuChinh(MaBuiChinh))
// bai 3
// const data1 = [3, 4]
// const data2 = [5, 6]
// const data3 = {name: 'david', age: '29'}
// const data4 = {name: 'david', age: '29', homeTown: 'Ha Noi', gender: 1}
// function mergeSpread(...rest){
//     let myData = []
//     rest.forEach((item)=>{
//         myData.push(...item)
//     })
//     return myData
// }
// console.log(mergeSpread(data1,data2)); 

// function mergeSpreadSecond(...rest){
//     return rest.reduce((total,child)=>{
//         return {...total,...child}
//      },{})
// }
// console.log( mergeSpreadSecond(data3,data4));
