<template>
  <div class="d-flex" style="background-color: #4B5320; padding: 20px; color: white;">
    <div style="width: 900px; height: 400px; margin-right: 10%">
      <!-- Вставте URL-адресу вашого фото замість 'url-фото' -->
      <img src="./images/map.jpg" alt="Місто Васильків, Київська область" style="width: 100%; height: 100%; object-fit: cover;">
      <a href="https://www.google.com/maps/place/%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9+%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D1%87%D0%BD%D0%B8%D0%B9+%D0%BB%D1%96%D1%86%D0%B5%D0%B9%E2%80%A6/@50.183716,30.3101419,18z/data=!4m14!1m8!3m7!1s0x40d4a54ae11a1977:0x54c9293ae4ee072f!2z0JLQsNGB0LjQu9GM0LrQvtCyLCDQmtC40LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAwODYwMA!3b1!8m2!3d50.1770891!4d30.3196385!16zL20vMDdsNDNt!3m4!1s0x40d4a5536559bfc3:0xc936020b4924451c!8m2!3d50.1839695!4d30.3094098!5m1!1e4?entry=ttu" target="_blank" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 20px; text-decoration: underline;">Переглянути на Google Картах</a>
    </div>
    <div style="margin: 80px 0 0 0;">
      <h1 class="mt-5" style="color: #32CD32;">Зв'яжіться з нами</h1>
      <a href="#" style="font-size: 20px; color: white;">Посилання на наших менеджерів</a>
      <p style="color: #32CD32;" class="mt-3">Наші номери</p>
      <div class="d-flex justify-content-between">
        <p style="color: #32CD32;">Kievstar:</p>
        <a style="white-space: nowrap; color: white;" href="#" class="ml-1">+380 98 883 46 52</a>
        <p style="color: #32CD32; margin-left: 10px;" class="ml-5">Life:</p>
        <a style="white-space: nowrap; color: white;" href="#" class="ml-1">+380 55 555 46 52</a>
      </div>
      <p style="font-size: 30px; color: #32CD32;">Наша адреса:</p>
      <p style="color: #32CD32;"><a href="#" style="font-size: 23px; color: white;">Бюро Капітана Канука</a></p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // Ви можете залишити цю частину коду, як є, оскільки ми замінили Google Map на фото
    return {};
  },
});
</script>

<style scoped>

</style>
