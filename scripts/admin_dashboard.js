
    
document.addEventListener('DOMContentLoaded', (event) => {
  

    const usersButton = document.getElementById('users');
    usersButton.addEventListener('click', () => {
      window.location.href = 'admin_users_choice.html';
    });
    const hotelsButton = document.getElementById('hotels');
    hotelsButton.addEventListener('click', () => {
      window.location.href = 'admin_hotels_choice.html';
    });
    const airlinesButton = document.getElementById('airlines');
    airlinesButton.addEventListener('click', () => {
      window.location.href = 'admin_airlines_choice.html';
    });
    const airportsButton = document.getElementById('airports');
    airportsButton.addEventListener('click', () => {
      window.location.href = 'admin_airports_choice.html';
    });
    const taxiesButton = document.getElementById('taxies');
    taxiesButton.addEventListener('click', () => {
      window.location.href = 'admin_taxi_choice.html';
    });
    const locationsButton = document.getElementById('locations');
    locationsButton.addEventListener('click', () => {
      window.location.href = 'admin_location_choice.html';
    });
    const flightsButton = document.getElementById('flights');
    flightsButton.addEventListener('click', () => {
      window.location.href = 'admin_flights_choice.html';
    });
    
    const navigationMap = {
      users: {
          create: 'admin_users_create.html',
          delete: 'admin_users_search.html'
      },
      flights: {
          create: 'admin_flights_create.html',
          delete: 'admin_flights_search.html'
      },
      airlines: {
          create: 'admin_airlines_create.html',
          delete: 'admin_airlines_search.html'
      },
      hotels: {
          create: 'admin_hotels_create.html',
          delete: 'admin_hotels_search.html'
      },
      taxi: {
          create: 'admin_taxi_create.html',
          delete: 'admin_taxi_search.html'
      },
      airports: {
          create: 'admin_airports_create.html',
          delete: 'admin_airports_search.html'
      },
      location: {
          create: 'admin_location_create.html',
          delete: 'admin_location_search.html'
      }
  };

  for (const section in navigationMap) {
      const sectionButton = document.getElementById(section);
      if (sectionButton) {
          sectionButton.addEventListener('click', () => {
              window.location.href = `admin_${section}_choice.html`;
          });
      }
  }

 
  const createButton = document.getElementById('create');
  const deleteButton = document.getElementById('delete');
  const currentPath = window.location.pathname.split('/').pop().split('_')[1];

  if (createButton && deleteButton && navigationMap[currentPath]) {
      createButton.addEventListener('click', () => {
          window.location.href = navigationMap[currentPath].create;
      });
      deleteButton.addEventListener('click', () => {
          window.location.href = navigationMap[currentPath].delete;
      });
  }
  const backButton = document.getElementById('backButton');
  backButton.addEventListener('click', () => {
    window.location.href = 'admin_dashboard.html'; // Replace with your dashboard page URL
  });

  });
