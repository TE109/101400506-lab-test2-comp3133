# SpaceX Mission Viewer

## Usage

The SpaceX Mission Viewer is a web application that allows users to view information about SpaceX missions. The application provides three main features:

1. **Mission List**: This feature displays a list of all SpaceX missions, including details such as flight number, mission name, launch year, rocket information, and links to related articles, Wikipedia pages, and video links.

2. **Mission Filter**: This feature allows users to filter the mission list by launch year.

3. **Mission details**: This feature allows users to veiw the mission details of specifc missions.

To use the application, follow these steps:

1. Navigate to the application's main page.
2. To view the full list of missions, click on the "Mission List" link.
3. To filter the missions by launch year, click on the "Mission Filter" link, select the desired year, and click the "Search" button.
4. To view the details of a specific mission, click on the "Details" link for the mission you're interested in.

## API

The SpaceX Mission Viewer application uses the following API endpoints:

1. **Fetch All Missions**: `https://api.spacexdata.com/v3/launches`
2. **Fetch Missions by Launch Year**: `https://api.spacexdata.com/v3/launches?launch_year={year}`
3. **Fetch Mission Details**: `https://api.spacexdata.com/v3/launches/{flight_number}`

