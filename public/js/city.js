const cityContainer = document.querySelector('.city');
const citiesContainer = document.querySelector('.cities');
const cityDy = document.querySelector('.dycity');

const showSelectCity = (cities) => {
  cities.forEach((city) => {
    const p = document.createElement('p');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'city';
    input.value = city?._id;
    input.id = city?._id;
    input.checked = city.cityName === 'delhi';
    if (city?.cityName === 'delhi') cityDy.id = city._id;
    input.addEventListener('click', (e) => {
      console.log(e.target.value);
      cityDy.textContent = city?.cityName;
      cityDy.id = e.target.value;
    });
    const span = document.createElement('label');
    span.setAttribute('for', city?._id);
    span.textContent = city?.cityName;
    p.appendChild(input);
    p.appendChild(span);
    citiesContainer.appendChild(p);
  });
};

const showCity = (cities) => {
  if (!cities || !cities?.length) return;

  if (citiesContainer) return showSelectCity(cities);
  cities.forEach((city) => {
    const option = document.createElement('option');
    option.style = 'text-transform:capitalize;';
    option.value = city?._id;
    option.text = city?.cityName;
    cityContainer.appendChild(option);
  });
};

const fetchCity = async () => {
  try {
    const res = await fetch('/api/v1/city');

    const data = await res.json();
    if (data.status === 'fail' || data.status === 'error') {
      throw new Error(data?.message);
      itie;
    }
    console.log(data);
    showCity(data?.cities);
  } catch (error) {}
};

fetchCity();
