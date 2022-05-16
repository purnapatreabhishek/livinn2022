(() => {
  const editForm = document.querySelector('.auth-form');
  const usernameElem = document.querySelector('.edit-name');
  const noElem = document.querySelector('.edit-no');
  const cityElem = document.querySelector('.edit-city');
  const genderElem = document.querySelector('.edit-gender');
  const collegeElem = document.querySelector('.edit-college');
  const button = document.querySelector('input[type=submit]');

  function validate(phone) {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(phone);
  }

  editForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    button.disabled = true;

    try {
      const name = usernameElem.value;
      const phoneNo = noElem.value;
      const city = cityElem.value;
      const gender = genderElem.value;
      const college = collegeElem.value;

      if (!name || !phoneNo) {
        button.disabled = false;

        return tempAlert('Name and phone no is required');
      }
      if (!validate(parseInt(phoneNo))) {
        button.disabled = false;

        return tempAlert('Invalid Phone No', 3000, true);
      }

      const res = await fetch('/api/v1/auth/me', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phoneNo: parseInt(phoneNo),
          city,
          gender,
          college,
        }),
      });

      const data = await res.json();
      if (data.status === 'fail' || data.status === 'error') {
        throw new Error(data?.message);
      }
      tempAlert('Profile Edited', 5000);
    } catch (error) {
      tempAlert(error.message, 5000, true);
    }
    button.disabled = false;
  });
})();
