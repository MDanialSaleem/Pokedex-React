import * as Colors from "@material-ui/core/colors";

export default type => {
  switch (type.toLowerCase()) {
    case "normal":
      return Colors.brown[200];
    case "fire":
      return Colors.deepOrange[500];
    case "fighting":
      return Colors.red[900];
    case "water":
      return Colors.blue[500];
    case "flying":
      return Colors.indigo[200];
    case "grass":
      return Colors.green[500];
    case "poison":
      return Colors.purple[500];
    case "electric":
      return Colors.amber[500];
    case "ground":
      return Colors.brown[500];
    case "psychic":
      return Colors.pink[500];
    case "rock":
      return Colors.brown[900];
    case "ice":
      return Colors.cyan[500];
    case "bug":
      return Colors.lightGreen[500];
    case "dragon":
      return Colors.deepPurple[900];
    case "ghost":
      return Colors.purple[900];
    case "dark":
      return Colors.grey[900];
    case "steel":
      return Colors.blueGrey[200];
    case "fairy":
      return Colors.pink[200];
    case "???":
      return Colors.teal[800];
    default:
      return Colors.teal[800];
  }
};
