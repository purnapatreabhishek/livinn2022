(() => {
  // const username = document.querySelector('.username');
  const auth = document.querySelectorAll('.auth');
  const logout = document.querySelector('.logout');
  const signup = document.querySelector('.signup');

  const usernameElem = document.querySelector('.edit-name');
  const noElem = document.querySelector('.edit-no');
  const cityElem = document.querySelector('.edit-city');
  const genderElem = document.querySelector('.edit-gender');
  const collegeElem = document.querySelector('.edit-college');

  // const authenticated = document.querySelectorAll('.authenticated');
  const wishlist = document.querySelector('.wishlist');

  const fetchUser = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append('pragma', 'no-cache');
      myHeaders.append('cache-control', 'no-cache');
      const res = await fetch(`/api/v1/auth/me`, {
        method: 'GET',
        headers: myHeaders,
      });
      const data = await res.json();
      if (data.status === 'fail' || data.status === 'error') {
        throw new Error(data?.message);
      }
      console.log(data);
      if (data?.user) {
        // username.textContent = data?.user?.name || '';
        // auth.forEach((item) => (item.style.display = 'none'));
        logout?.classList?.toggle('none');

        // authenticated.forEach((item) => (item.style.display = 'block'));
        if (wishlist) wishlist.style.display = 'inline-block';
        if (usernameElem) updateInput(data?.user);
        return;
      }
    } catch (e) {
      signup.classList.toggle('none');
      // signup.classList.toggle('none');
    }
  };

  window.onload = () => {
    fetchUser();
  };

  logout?.addEventListener('click', async () => {
    try {
      const res = await fetch(`/api/v1/auth/logout`);
      const data = await res.json();
      if (data.status === 'fail' || data.status === 'error') {
        throw new Error(data?.message);
      }
      console.log(data);
      window.location.href = '/login';
    } catch (error) {}
  });

  function updateInput(user) {
    try {
      usernameElem.value = user?.name || '';
      noElem.value = user?.phoneNo || '';
      cityElem.value = user?.city || '';
      genderElem.value = user?.gender || '';
      collegeElem.value = user?.college || '';
    } catch (error) {}
  }
})();
