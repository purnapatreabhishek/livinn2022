(() => {
  const body = document.querySelector('tbody');
  const table = document.querySelector('table');
  const no = document.querySelector('.no');

  GLOBAL__DATA = {
    wishlist: [],
  };

  const showWishlists = (wishlists) => {
    if (!wishlists || !wishlists.length) {
      table.innerHTML = '';
      no.textContent = 'No Wishlist added';
      return;
    }

    body.innerHTML = '';

    wishlists.forEach((wishlist, index) => {
      const tr = document.createElement('tr');
      const sno = document.createElement('td');
      sno.textContent = index + 1;
      const name = document.createElement('td');
      name.textContent =
        `${
          (wishlist?.residenceId?.name || '') +
          ' / ' +
          wishlist?.residenceId?.code
        }` || 'No data';
      const img = document.createElement('img');
      img.src = wishlist?.residenceId?.images?.[0]?.url;
      img.style = 'width:50px;height:50px; margin:0 10px;';
      const city = document.createElement('td');
      city.textContent = wishlist?.residenceId?.city?.cityName || 'No data';
      const area = document.createElement('td');
      area.textContent = wishlist?.residenceId?.area?.name || 'No data';
      const link = document.createElement('td');
      link.innerHTML = `<a href="/property-detail/${
        wishlist?.residenceId?.city?.cityName || 'in'
      }/${wishlist?.residenceId?.area?.name || 'in'}?code=${
        wishlist?.residenceId?.code
      }" style="color:blue;">View Details</a>`;
      const itd = document.createElement('td');
      const i = document.createElement('i');
      i.classList.add('fas', 'fa-trash', 'delete');

      i.addEventListener('click', () =>
        deleteWishlist(wishlist?.residenceId?._id)
      );

      itd.appendChild(i);
      tr.appendChild(sno);
      tr.appendChild(name);
      tr.appendChild(img);
      tr.appendChild(city);
      tr.appendChild(area);
      tr.appendChild(link);
      tr.appendChild(itd);
      body.appendChild(tr);
    });
  };

  const fetchWishlist = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append('pragma', 'no-cache');
      myHeaders.append('cache-control', 'no-cache');
      const res = await fetch(`/api/v1/wishlist/user/all`, {
        method: 'GET',
        headers: myHeaders,
      });
      const data = await res.json();
      if (data.status === 'fail' || data.status === 'error') {
        throw new Error(data?.message);
      }
      GLOBAL__DATA.wishlist = data?.wishlist || [];
      showWishlists(GLOBAL__DATA.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  fetchWishlist();

  async function deleteWishlist(id) {
    if (!id) return;
    try {
      const res = await fetch(`/api/v1/wishlist/${id}`, { method: 'POST' });
      const data = await res.json();
      if (data.status === 'fail' || data.status === 'error') {
        throw new Error(data?.message);
      }

      const filter = GLOBAL__DATA.wishlist.filter(
        (wish) => wish?.residenceId?._id !== id
      );

      GLOBAL__DATA.wishlist = filter;

      showWishlists(GLOBAL__DATA.wishlist);
    } catch (error) {
      console.log(error);
      // tempAlert(error?.message, 3000, true);
    }
  }
})();
