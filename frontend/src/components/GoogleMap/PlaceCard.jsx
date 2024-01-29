import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { DragDropContext, Draggable } from "react-beautiful-dnd";

const PlaceCard = () => {
  const searchResults = useSelector((state) => state.places);
  console.log(searchResults);

  return (
    <DragDropContext>
      {searchResults.map((place, index) => (
        <Draggable draggableId={`${place}_${index}`} index={index} key={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              test
              <Card key={index} sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={place.photo}
                  title={place.name}
                />
                <CardContent>
                  <Avatar src={place.icon} />
                  <Typography gutterBottom variant="h5" component="div">
                    {place.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {place.businessStatus}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {place.formattedAddress}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {place.rating}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          )}
        </Draggable>
      ))}
    </DragDropContext>
  );
};

export default PlaceCard;
