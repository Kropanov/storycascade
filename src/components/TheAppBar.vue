<template>
  <header>
    <div class="pull-left">
      <img id="logo" src="" alt="Logo" />
      <nav>
        <router-link to="/file">File</router-link> | <router-link to="/edit">Edit</router-link> |
        <router-link to="/insert">Insert</router-link> |
        <router-link to="/format">Format</router-link>
      </nav>
    </div>
    <div class="pull-right">
      <img id="download" src="../assets/download.gif" height="20px" width="20px" alt="Download" />
      <img id="full-screen" src="../assets/full-screen.gif" height="20px" width="20px" alt="Full screen" />
      <img id="settings" src="../assets/settings.gif" height="20px" width="20px" alt="Settings" />
      <img id="user-profile" width="40" height="40" src="../assets/user-profile.svg" alt="User Profile" />
    </div>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      darkTheme: true,
    };
  },
};
</script>

<style scoped lang="scss">
header {
  padding: 10px 10px 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(42, 51, 52, 0.34);

  & .pull-left {
    display: flex;
    & #logo {
      margin: 0 15px 0 15px;
    }

    & nav {
      margin-left: 5px;
    }
  }

  & .pull-right {
    display: flex;
    align-items: center;
  }
}

#user-profile {
  cursor: pointer;
  padding: 0 10px 0 10px;
}

#settings {
  cursor: pointer;
  margin-right: 5px;
}

#full-screen {
  cursor: pointer;
  margin-right: 10px;
}

#download {
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 5px;
}

nav {
  margin-right: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
