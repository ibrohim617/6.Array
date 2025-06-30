let array = [
    '1', '2', '3', '4',
]
alert('boshlangich array uzunligi: ' + array.length)

if (confirm('sizning arrayingizdan malumotlarni olib tashalamoqchimiz')) {
    array.pop()
    alert('arrayning uzunligi ' + array.length)
} else {
    alert('array uzunligi ' + array.length)
}