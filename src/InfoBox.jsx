import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function InfoBox({info}) {

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
            <Typography sx={{textAlign:"center"}} gutterBottom variant="h5" component="div">
              {info.cityInput}
            </Typography>
            <Typography variant="body2" component="div" sx={{ color: "text.secondary" }}>
              <div style={{justifyItems:"center"}}>
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
