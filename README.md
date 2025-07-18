# 🌤️ React Weather App

A simple weather application built using **React** and **Material UI**, which allows users to search for the current weather of any city using the **WeatherAPI**.

---

## 🔍 Features

- 🔎 Search for any city to get live weather data
- 🌡️ Shows temperature, humidity, and weather conditions
- 🕒 Displays last updated time and country
- 📦 Built with React Hooks and functional components
- 🎨 Uses Material UI for beautiful UI components

---

## 🖼️ Preview

> Add a screenshot of your app here:
> 
> ![Weather App Screenshot](screenshot.png)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add your WeatherAPI key and base URL:

```env
VITE_API_KEY=your_api_key
VITE_API_Link=https://api.weatherapi.com/v1/current.json
```

### 4. Run the application

```bash
npm run dev
```

Your app will start on `http://localhost:5173` (or whichever port Vite chooses).

---

## 📁 Project Structure

```
src/
├── App.jsx             # Root component
├── WeatherApp.jsx      # Main weather logic
├── InfoBox.jsx         # Display weather data
├── SearchBox.jsx       # City input search
├── SearchBox.css       # Styles for search box
```

---

## 🛠️ Technologies Used

- React
- React Hooks (`useState`)
- Material UI
- Vite
- WeatherAPI

---

## 🌐 API Used

- [WeatherAPI](https://www.weatherapi.com/docs/) – Fetches live weather data

---

## 💡 Future Improvements

- 🌍 Add 3–5 day forecast view
- 📍 Use geolocation for auto-location weather
- 🌈 Dynamic background based on weather condition
- 🌙 Add dark mode toggle

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- Weather data powered by [WeatherAPI](https://www.weatherapi.com/)
- UI built with [Material UI](https://mui.com/)

---

## 🔗 Connect with Me
- LinkedIn: [Pulkit Gaba](https://www.linkedin.com/in/pulkitgaba)