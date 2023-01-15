import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { prominent } from "color.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, CardHeader } from "@mui/material";
import { red } from "@mui/material/colors";

export const ProductCard = ({ product }) => {
  const navigation = useNavigate();
  const [color, setColor] = useState("");
  const [hasCover, setHasCover] = useState(false);

  useEffect(() => {
    getColor();
  }, []);

  const getColor = async () => {
    if (product) {
      setHasCover(true);

      const color = await prominent(product.photoUrl, { amount: 1 });
      if (color.toString() === "255,255,255") {
        setColor(`RGB(10,10,10)`);
      } else {
        setColor(`RGB(${color.toString()})`);
      }
    } else {
      setHasCover(false);
    }
  };

  const handleNavigate = () => {
    navigation(`/product/${product.id}`);
  };

  const header = (
    <div style={{ position: "relative" }}>
      <img
        className="image-cover"
        alt="cover"
        src={
          hasCover
            ? product.photoUrl
            : "https://icons.veryicon.com/png/o/miscellaneous/basic-icon-1/unknown-18.png"
        }
      />
      <h3 style={{ position: "absolute", top: 0, right: 15, color: "green"}}>
        {product.price}$
      </h3>
    </div>
  );

  return (
    <Box>
      {product ? (
        <Grid
          xs={2}
          sm={4}
          md={2}
          onClick={handleNavigate}
          style={{ gap: "15px" }}
        >
          <Card
            className="card-book animate__animated animate__bounceIn"
            title={product.name}
            style={{ backgroundColor: color }}
            header={header}
          ></Card>
        </Grid>
      ) : (
        <></>
      )}
    </Box>
  );
};
