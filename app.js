//? pcye 1 ve 20 arasinda sayi tutturduk
let rastgeleSayi = Math.ceil(Math.random() * 20)
console.log(rastgeleSayi);

let mesaj = document.querySelector('.msg')

let skor = 10;
// skoru index den cekebilirdik. Ama cok kullanacagimiz icin bu daha tercih edilen yol

//! local storage da top-score adiyla bir degisken varsa getir yoksa 0 yaz

let enYuksekSkor = localStorage.getItem('.top-score') || 0;

document.querySelector('.top-score').textContent = enYuksekSkor

//? her check butonuna basildiginda yapilacaklar

document.querySelector('.check').addEventListener("click", () => {

    const tahmin = document.querySelector(".guess").value
    console.log(tahmin);

    //! tahmin girmeden butona basildiysa
    if (!tahmin || tahmin > 20) {
        mesaj.textContent = 'Lutfen 1-20 arasinda bir sayi giriniz'
    } else if (tahmin == rastgeleSayi) {
        mesaj.textContent = 'Tebrikler Bildiniz 👏👏👏'
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').textContent = rastgeleSayi

        // top score kontrolu

        if (skor > enYuksekSkor) {

            localStorage.setItem('.top-score', skor)

            enYuksekSkor = skor
            document.querySelector('.top-score').textContent = enYuksekSkor
        }

    } else {

        //? skor 1 den buyuk oldugu surece tahmin hakkim var

        if (skor > 1) {
            skor--
            document.querySelector('.score').textContent = skor

            tahmin < rastgeleSayi
                ? mesaj.textContent = 'Arttir 👆'
                : mesaj.textContent = 'Azalt 👇'
        } else {
            mesaj.textContent = 'Oyunu Kaybettiniz 😥'
            document.querySelector('.score').textContent = 0
            document.querySelector('body').style.backgroundColor = 'red'
        }
    }
})

//? Again butonuna basinca ayarlar baslangic degerine gelsin. arka plan #2d3436 olsun

document.querySelector('.again').onclick = () => {

    document.querySelector('body').style.backgroundColor = '#2d3436'

    rastgeleSayi = Math.ceil(Math.random() * 20)
    console.log(rastgeleSayi);

    skor = 10

    document.querySelector('.score').textContent = skor

    document.querySelector('.number').textContent = '?'

    document.querySelector('.guess').value = ''

    mesaj.textContent = 'Oyun Yeni Oyuncu Icin Basliyor'

}

//! ENTER

// klavyeden enter butonuna basildiginda check butonu calissin

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        // enter tusuna basildiginda check butonuna tikla
        document.querySelector('.check').click()
    }
})

