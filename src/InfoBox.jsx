import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function InfoBox() {
  let info = {
    cityInfo: "Delhi",
    condition: "Partialy Cloudy",
    temprature: 37.6,
    feelsLike: 42.9,
    humidity: 39,
    updated: "2025-06-23 18:15",
    country: "India",
  };

  return (
    <>
    <div style={{display:"flex",justifyContent:"center"}}>
      <div className="InfoBox">
        <Card sx={{ width: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://th.bing.com/th/id/OIP.esMsKDt_pUH6g8kpf4FbtgHaFj?w=200&h=200&c=10&o=6&cb=iavawebpc1&dpr=1.6&pid=genserp&rm=2"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.cityInfo}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <div>
                <p>Country : {info.country}</p>
                <p>Temprature : {info.temprature}°C</p>
                <p>Condition : {info.condition}</p>
                <p>Feels like : {info.feelsLike}</p>
                <p>Humidity : {info.humidity}</p>
                <p>Updated : {info.updated}</p>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
      </div>
    </>
  );
}

export default InfoBox;
