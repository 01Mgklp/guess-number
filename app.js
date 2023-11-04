//? pcye 1 ve 20 arasinda sayi tutturduk
let rastgeleSayi = Math.ceil(Math.random() * 20)
console.log(rastgeleSayi);

let mesaj = document.querySelector('.msg')

let skor = 10;
// skoru index den cekebilirdik. Ama cok kullanacagimiz icin bu daha tercih edilen yol
let enYuksekSkor = 0;

//? her check butonuna basildiginda yapilacaklar

document.querySelector('.check').addEventListener("click", () => {

    const tahmin = document.querySelector(".guess").value
    console.log(tahmin);

    //! tahmin girmeden butona basildiysa
    if (!tahmin) {
        mesaj.textContent = 'Lutfen bir sayi giriniz'
    } else if (tahmin == rastgeleSayi) {
        mesaj.textContent = 'Tebrikler Bildiniz 👏👏👏'
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').textContent = rastgeleSayi

        // top score kontrolu
    } else {

        //? skor 1 den buyuk oldugu surece tahmin hakkim var

        if (skor > 1){
            skor --
            document.querySelector('.score').textContent = skor
        } else {
            mesaj.textContent = 'Oyunu Kaybettiniz 😥'
            document.querySelector('.score').textContent = 0
            document.querySelector('body').style.backgroundColor = 'red'
        }
    }
})