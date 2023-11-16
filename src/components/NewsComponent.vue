<template>
    <div class="news-box">
      <img :src='"./src/components" + image' alt="News Image" class="news-image" />
      <div class="news-content">
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
        <a :href="link" class="read-more" target="_blank">Детальніше</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .news-box {
    display: flex;
    margin-bottom: 20px;
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .news-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-right: 20px;
    border-radius: 8px;
  }
  
  .news-content {
    flex: 1;
  }
  
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: black;
  }
  
  p {
    font-size: 14px;
    margin-bottom: 10px;
    color: black;
  }
  
  .read-more {
    text-decoration: none;
    color: #ad1132;
    font-weight: bold;
  }
</style>
