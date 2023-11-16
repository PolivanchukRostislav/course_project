<template>
  <nav class="navbar navbar-expand-lg w-75 bg-body-tertiary">
    <div class="container-fluid">
      <router-link to="/">
        <img src="./images/logo.png" alt="Логотип" width="30" height="30">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Головна</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/book" class="nav-link">Книги</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Про нас</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Зв'язатися з нами</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Пошук" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Пошук</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
