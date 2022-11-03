/*
Bài 1.
Cho đối tượng sau:
const nguyetMai = {
  name: 'Mai',
  age: '30',
  address: 'bac ninh',
  children: [
    {name: 'Bin', age: 10},
    {name: 'Bin', age: 10},
  ]
};

a.
  - Tạo đối tượng nguyetMaiClone từ đối tượng nguyetMai
  - Đổi thuộc tính "name" của nguyetMaiClone thành "Mai clone" mà không thay đổi tên của chị Mai trong nguyetMai
b.
  - Thêm thuộc tính "husband" cho nguyetMai và gán giá trị = undefined
  - Tạo chuỗi json từ đối tượng nguyetMai show ra index.html, kiểm trả xem thuộc tính husband có hiển thị không
  - Đổi kiểu dữ liệu nào phù hợp cho thuộc tính husband khi chồng chị Mai vẫn chưa xác định
*/
const root = document.querySelector('#root')
let nguyetMai = {
  name: 'Mai',
  age: '30',
  address: 'bac ninh',
  children: [
    {name: 'Bin', age: 10},
    {name: 'Bin', age: 10},
  ]
};
// const nguyetMaiClone = {...nguyetMai}
const nguyetMaiClone = JSON.parse(JSON.stringify(nguyetMai))
nguyetMaiClone.name = 'Mai clone'
console.log(nguyetMai.name)
// b
nguyetMai = {...nguyetMai,husband:undefined}
root.innerHTML = JSON.stringify(nguyetMai)
// không hiển thị thuộc tính có gán value là undefined
// đổi thành null vì null vì khi thành null thì được hiểu là có gán giá trị nhưng là rỗng và sẽ có giá trị về sau


