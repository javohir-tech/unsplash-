//image
import baner from '../assets/unsplash.jpg'

export default function About() {
  return (
      <div className='container p-2'>
        <img src={baner} alt="banner-image" className='max-h-96 w-screen rounded-xl' />

        <div className='p-4'>
          <h3 className="text-2xl font-bold mb-4">Sayt Haqida Ma’lumot</h3>
          <p className="mb-4">
            Sizni ilhomlantiruvchi rasmlarni topish va ulardan cheklovsiz foydalanish uchun mo‘ljallangan platformamizga xush kelibsiz! Bu sayt professional suratkashlar va ijodkorlar uchun bepul resurs bo‘lib, sizga o‘z ishlaringizda yuqori sifatli rasmlar topish va yuklab olish imkonini beradi.
          </p>

          <h3 className="text-xl font-bold mb-3">Asosiy Xususiyatlar:</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Cheksiz Rasm Kutubxonasi</li>
            <p>Har qanday mavzuda yuqori sifatli rasmlarni qidirish imkoniyati mavjud: tabiat, texnologiya, moda va boshqa turdagi suratlarni osongina topishingiz mumkin.</p>
            <li>Reklamalarsiz Tajriba</li>
            <p>Foydalanuvchilar uchun reklamasiz toza interfeys.</p>
            <li>Yuklab Olishning Cheklovsiz Imkoniyati</li>
            <p>Rasmlarni istalgan o‘lchamda va sifatda cheksiz yuklab olish mumkin.</p>
            <li>Izlashning Ilg‘or Mexanizmi</li>
            <p>Oson va aniq qidiruv tizimi yordamida kerakli rasmni bir necha soniyada topishingiz mumkin.</p>
            <li>Minimalistik va Qulay Interfeys</li>
            <p>Saytimiz zamonaviy, intuitiv dizaynga ega.</p>
          </ul>

          <h3 className="text-xl font-bold mb-3">Saytdan Kimlar Foydalanishi Mumkin?</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Dasturchilar</li>
            <p>Veb-saytlar va ilovalar uchun bepul resurslar.</p>
            <li>Dizaynerlar</li>
            <p>Grafika, bannerlar va reklama materiallari uchun kerakli rasmlar.</p>
            <li>Bloggerlar va Kontent Yaratuvchilar</li>
            <p>Blog postlari va ijtimoiy media kontenti uchun rasmlar.</p>
            <li>Tadbirkorlar</li>
            <p>Tijorat loyihalarida bepul foydalanish uchun.</p>
            <li>Talabalar</li>
            <p>Taqdimot va loyihalarda foydalanish uchun.</p>
          </ul>

          <h3 className="text-xl font-bold mb-3">Nega Aynan Bizni Tanlaysiz?</h3>
          <p className="mb-4">
            Foydalanuvchilarning ehtiyojlarini inobatga olib yaratilgan bepul platforma. Cheksiz yuklab olish, reklamasiz interfeys va yuqori sifatli kontent.
          </p>

          <h3 className="text-xl font-bold mb-3">Qo‘shimcha Funksiyalar (Kelajakda):</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>QR kod orqali rasmlarni tezda yuklab olish.</li>
          </ul>
        </div>
      </div>
  )
}
