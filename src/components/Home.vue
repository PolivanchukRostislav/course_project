<template>
  <div>
    <!-- Slider Section -->
    <div id="carouselExample" class="carousel slide w-75">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./images/img1.jpg" class="d-block w-100 carousel-image" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./images/img2.jpg" class="d-block w-100 carousel-image" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./images/img3.jpg" class="d-block w-100 carousel-image" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="news-section">
    <h2>Новини</h2>
    <NewsComponent
      v-for="(news, index) in newsList"
      :key="index"
      :title="news.title"
      :content="news.content"
      :image="news.image"
      :link="news.link"
    />
  </div>
  </div>
</template>

<script>
import NewsComponent from "@/components/NewsComponent.vue"; 

export default {
  data() {
    return {
      newsList: [
        {
          title: "Центр морально-психологічного забезпечення Збройних Сил України",
          content:
            "Ця пісня була написана під час повітряної тривоги. Був масштабний ракетний удар. Вся Україна залишилася без світла. Та була надія що все буде добре. По радіо сказали що сили ППО збили більшість ворожих цілей. Назва говорить сама за себе. Слава нашій ППО. Велика подяка тим хто щитом небесним бережуть людські життя!",
          image: "/images/news1.jpg",
          link: "https://www.facebook.com/CMASua",
        },
        {
          title: "Центр морально-психологічного забезпечення Збройних Сил України",
          content: "Лиш тримайся, живи!",
          image: "/images/news2.jpg",
          link: "https://www.facebook.com/CMASua",
        },
        {
          title: "Центр морально-психологічного забезпечення Збройних Сил України",
          content: "Моя армія",
          image: "/images/news3.jpg",
          link: "https://www.facebook.com/CMASua",
        },
      ],
    };
  },
  components: {
    NewsComponent,
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  line-height: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 11px;
  color: #333333;
}

a:link, a:visited {
  color: #ad1132;
  text-decoration: none;
}

a:active, a:hover {
  color: #FF0000;
}

p {
  margin: 0 0 5px 0;
  padding: 0px;
}

h1 {
  margin: 0 0 5px 0;
  padding: 10px 0 10px 0;
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  color: #ad1132;
}

h2 {
  margin: 0 0 10px 0;
  padding: 5px 0;
  font-size: 16px;
  font-weight: bold;
  color: #b0a6a6;
}

h3 {
  margin: 0 0 5px 0;
  padding: 2px 0;
  font-size: 12px;
  font-weight: bold;
  color: #ad1132;
}

h4 {
  margin: 0 0 5px 0;
  padding: 2px 0;
  font-size: 16px;
  font-weight: bold;
  color: #ad1132;
}

.updatedtime {
  font-size: 10px;
  font-weight: bold;
  color: #FF0000;
}

.view_all a {
  clear: both;
  display: block;
  width: 100%;
  padding: 5px 0 1px 0;
  margin-bottom: 5px;
  font-weight: bold;
  text-decoration: none;
  border-top: 1px dotted #CCC;
}

#carouselExample {
    width: 100%;
    margin: auto; 
  }

  #carouselExample .carousel-item img {
    width: 100%;
    height: 300px; 
    object-fit: cover;
    margin: auto; 
  }

#templatemo_searchbox form {
  margin: 0px;
  padding: 0px;
}

/* content */
#templatemo_content {
  float: left;
  width: 75%;
}

#templatemo_main_leftcol {
  float: left;
  width: 630px;
  margin-top: 15px;
}

.templatemo_leftcol_subcol {
  float: left;
  width: 285px;
  padding: 0 15px 0 0;
  margin-right: 15px;
}

#templatemo_main_rightcol {
  float: right;
  margin-top: 15px;
  width: 370px;
}

* html #templatemo_main_rightcol {
  margin-left: -15px;
}

#templatemo_topnews {
  display: block;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px dotted #cccccc;
}

#templatemo_topnews img {
  margin-bottom: 5px;
}

#templatemo_book_section {
  display: block;
  width: 278px;
  padding: 5px 0 5px 5px;
  margin-bottom: 25px;
  border: 1px solid #CCC;
}

#image_section {
  float: left;
  width: 278px;
  padding-bottom: 5px;
}

#image_section img {
  float: left;
  margin: 0 3px 3px 0;
  border: none;
}

.regular_section {
  display: block;
  width: 285px;
  padding: 0 0 10px 60px;
  margin-bottom: 15px;
  border-bottom: 1px dotted #CCC;
}

.newsbox {
  clear: both;
  width: 285px;
  padding-bottom: 15px;
}


.newsbox img {
  float: left;
  margin: 0 5px 0 0;
  padding: 0px;
}

.newsbox .newstitle {
  font-size: 16px;
  color: #C00;
  font-weight: bold;
}

.newsbox p {
  font-size: 11px;
}

.regular_section ul {
  clear: both;
  margin: 0 0 10px 0;
  padding: 0 0 0 20px;
}

.regular_section li a {
  font-weight: bold;
}

.regular_section li a:hover {
  text-decoration: underline;
}

.templatemo_leftcol_fullrow {
  clear: both;
  float: left;
  width: 600px;
  padding: 10px 0 0 10px;
  border: 1px solid #CCC;
  margin-bottom: 25px;

}

.templatemo_rcol_sectionwithborder {
  display: block;
  width: 368px;
  border: 1px solid #CCC;
  margin-bottom: 25px;
}

#templatemo_video_section {
  display: block;
  width: 358px;
  margin-top: 10px;
  margin-left: 10px;
}

* html #templatemo_video_section {
  margin-left: 5px;
}

#templatemo_video_section .video_box {
  float: left;
  width: 106px;
  margin: 0 10px 10px 0;
}

#templatemo_video_section .video_box img {
  margin: 0 0 5px 0;
}

#templatemo_video_section .video_box a {
  font-size: 10px;
  font-weight: bold;
}

#templatemo_video_section .video_box a span {
  color: #FF0000;
  font-size: 10px;
  font-weight: bold;
}

#templatemo_newsletter_section {
  width: 348px;
  margin: 10px;
}

#templatemo_newsletter_section form {
  margin: 0 30px 0 0;
  text-align: right;
}

#templatemo_newsletter_section select {
  width: 200px;
  height: 25px;
  padding: 2px 0;
  margin: 0px;
}

#templatemo_newsletter_section .form_row {
  padding: 3px 0px;
}


#templatemo_newsletter_section label {
  margin-right: 10px;
}

#templatemo_newsletter_section input {
  width: 195px;
  height: 15px;
}

#templatemo_newsletter_section .button {
  height: 25px;
  width: 80px;
}

#templatemo_blog_section {
  width: 348px;
  margin: 10px;
}

#templatemo_blog_section .blog_box {
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 1px dotted #CCC;
}

#templatemo_blog_section .datetime {
  font-weight: bold;
}

#templatemo_poll_section {
  width: 348px;
  margin: 10px;
}

#templatemo_poll_section p {
  padding-bottom: 10px;
}


#templatemo_poll_section img {
  float: right;
}

#templatemo_poll_section .button {
  height: 25px;
  width: 50px;
  margin-right: 25px;
}

#templatemo_partner_section {
  width: 348px;
  margin: 10px;
}

.partner_box {
  width: 348px;
  padding: 0px;
  margin-bottom: 25px;
}

.partner_box p {
  clear: both;
}

/* ######### CSS for Shade Tabs. Remove if not using ######### */

.tab_section {
  clear: both;
  width: 600px;
  margin-bottom: 25px;
}

.topnews {
  float: left;
  width: 200px;
  padding-right: 10px;
  margin-right: 10px;
  border-right: 1px dotted #CCC;
}

.newslist {
  float: left;
  width: 350px;
}

.newslist ul {
  clear: both;
  margin: 0;
  padding: 0 0 10px 20px;
}

.newslist li {
  padding-bottom: 5px;
}

.newslist li a {
  font-weight: bold;
}

.tabcontent_section {
  clear: both;
  float: left;
  width: 580px;
  margin-bottom: 1em;
  padding: 10px;
  border: 1px solid #981b35;
}

.shadetabs {
  padding: 3px 0;
  margin-left: 0;
  margin-top: 1px;
  margin-bottom: 0;
  font: bold 12px Verdana;
  list-style-type: none;
  text-align: left; /*set to left, center, or right to align the menu as desired*/
}

.shadetabs li {
  display: inline;
  margin: 0;
}

.shadetabs li a {
  text-decoration: none;
  position: relative;
  z-index: 1;
  padding: 3px 7px;
  margin-right: 3px;
  border: 1px solid #981b35;
  color: #FFFFFF;
  background: #ad1132;
}

.shadetabs li a:visited {
  color: #FFFFFF;
}

.shadetabs li a:hover {
  text-decoration: underline;
  color: #FFFFFF;
}

.shadetabs li a.selected { /*selected main tab style */
  color: #ad1132;
  position: relative;
  top: 1px;
}

.shadetabs li a.selected { /*selected main tab style */
  background-image: url(images/shadeactive.gif);
  border-bottom-color: white;
}

.shadetabs li a.selected:hover { /*selected main tab style */
  text-decoration: none;
}

.tabcontent {
  display: none;
}

@media print {
  .tabcontent {
    display: block ;
  }
}

.modernbricksmenu2 ul {
  margin: 0 10px 0 0;
  padding: 0;
  list-style: none;
}

.modernbricksmenu2 li {
  display: inline;
  margin: 0 2px 0 0;
  padding: 0;
  text-transform: uppercase;
}

.modernbricksmenu2 a {
  float: left;
  display: block;
  font: bold 11px Arial;
  color: white;
  text-decoration: none;
  margin: 0 1px 0 0; /*Margin between each menu item*/
  padding: 5px 10px;
  background-color: black; /*Brown color theme*/
  border-top: 1px solid white;
}

.modernbricksmenu2 a:hover {
  background-color: #D25A0B; /*Brown color theme*/
  color: white;
}

.modernbricksmenu2 a.selected { /*currently selected tab*/
  background-color: #D25A0B; /*Brown color theme*/
  color: white;
  border-color: #D25A0B; /*Brown color theme*/
}

@media print {
  .tabcontent {
    display: block ;
  }
}

.indentmenu ul {
  margin: 0;
  padding: 0;
  float: left;
  /* width: 80%; width of menu*/
  border-top: 1px solid navy; /*navy border*/
  /*background: black url(indentbg.gif) center center repeat-x;*/
}

.indentmenu ul li {
  display: inline;
}

.indentmenu ul li a {
  float: left;
  color: white; /*text color*/
  padding: 5px 11px;
  text-decoration: none;
  border-right: 1px solid navy; /*navy divider between menu items*/
}

.indentmenu ul li a:visited {
  color: white;
}

@media print {
  .tabcontent {
    display: block ;
  }
}


</style>