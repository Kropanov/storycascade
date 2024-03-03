<template>
  <header>
    <div class="pull-left">
      <img id="logo" src="" alt="Logo" />
      <button class="btn" v-on:click="test">File</button>
      <button class="btn">Edit</button>
      <button class="btn">Insert</button>
      <button class="btn">Format</button>
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
  methods: {
    test() {
      console.log('click');
    },
  },
};
</script>

<style scoped lang="scss">
header {
  padding: 10px 10px 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(221, 221, 221, 0.8666666667);

  & .pull-left {
    display: flex;

    & #logo {
      margin: 0 20px 0 20px;
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

.btn {
  font-size: 14px;
  height: 100%;
  border: none;
  background: white;
  cursor: pointer;
  &:hover {
    background: rgba(44, 43, 43, 0.11);
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
}
</style>
