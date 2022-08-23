import { createSlice, current } from "@reduxjs/toolkit";

//Style Slide 1 Images
import PixieBabyBlue from "../../../../assets/Pixie Baby Blue.webp";
import LavenderTatiana from "../../../../assets/Lavender Tatiana.webp";
import TwylaMeshCorsetTee from "../../../../assets/Twyla Mesh Corset Tee.webp";
import CarlaMauve from "../../../../assets/Carla Mauve.webp";
import CadyRegina from "../../../../assets/Cady + Regina.webp";
import MiaDress from "../../../../assets/Mia Dress.webp";
//Style Slide 2 Images
import SashaWhite from "../../../../assets/Sasha White.webp";
import CassidyCorsetBeltGiselleTop from "../../../../assets/Cassidy Corset Belt + Giselle Top.webp";
import GenevieveDress from "../../../../assets/Genevieve Dress.webp";
import IreneEstrella from "../../../../assets/Irene + Estrella.webp";
import BrieBrielleBettySet from "../../../../assets/Brie, Brielle, Betty Set.webp";
import BabyPinkSchiffliPixie from "../../../../assets/Baby Pink Schiffli Pixie.webp";
///Style Slide 3 Images
import AnastasiaGown from "../../../../assets/Anastasia Gown.webp";
import CamilleOrganzaDress from "../../../../assets/Camille Organza Dress.webp";
import BelleLavender from "../../../../assets/Belle Lavender.webp";
import ReeseDress from "../../../../assets/Reese Dress.webp";
import CalliopeTop from "../../../../assets/Calliope Top.webp";
import DonnaJessica from "../../../../assets/Donna + Jessica.webp";
///Style Slide 4 Images
import AltheaLavenderGown from "../../../../assets/Althea Lavender Gown.webp";
import KaiaKaylaSet from "../../../../assets/Kaia + Kayla Set.webp";
import TwylaDaisyAvaJeans from "../../../../assets/Twyla Daisy + Ava Jeans.webp";
import DiannaCorset from "../../../../assets/Dianna Corset.webp";
import LauraCharliePants from "../../../../assets/Laura + Charlie Pants.webp";
import RainRileyRory from "../../../../assets/Rain, Riley, Rory.webp";
///Style Slide 5 Images
import IsabelleDress from "../../../../assets/Isabelle Dress.webp";
import CarlaBlack from "../../../../assets/Carla Black.webp";
import StacyLoungeSet from "../../../../assets/Stacy Lounge Set.webp";
import AnnaliseDress from "../../../../assets/Annalise Dress.webp";
import FleurFreya from "../../../../assets/Fleur + Freya.webp";
import CarinaSet from "../../../../assets/Carina Set.webp";
///Style Slide 6 Images
import ReinaRamona from "../../../../assets/Reina + Ramona.webp";
import DixieCorsetEvieJeans from "../../../../assets/Dixie Corset + Evie Jeans.webp";
import ElianaCarmen from "../../../../assets/Eliana + Carmen.webp";
import SashaBlush from "../../../../assets/Sasha Blush.webp";
import MaiaLinenDress from "../../../../assets/Maia Linen Dress.webp";
import KendallHailey from "../../../../assets/Kendall + Hailey.webp";

const rowsData = [
  {
    attribute: "Pixie Baby Blue",
    value: "Pixie Powder Blue Puff Corset Dress",
    imgUrl: PixieBabyBlue,
  },
  {
    attribute: "Lavender Tatiana",
    value: "Tatiana Ruched Midi Corset Dress",
    imgUrl: LavenderTatiana,
  },
  {
    attribute: "Twyla Mesh Corset Tee",
    value: "Twyla Mesh Corset T-Shirt",
    imgUrl: TwylaMeshCorsetTee,
  },
  {
    attribute: "Carla Mauve",
    value: "Carla Mauve Silk Corset Top",
    imgUrl: CarlaMauve,
  },
  {
    attribute: "Cady + Regina",
    value: "Cady Baby Pink Velour Crop Hoodie",
    imgUrl: CadyRegina,
  },
  {
    attribute: "Mia Dress",
    value: "Mia Baby Pink Lurex Jacquard Corset Gown",
    imgUrl: MiaDress,
  },
  {
    attribute: "Sasha White",
    value: "Sasha Embroidered Organza Sleeve Corset Top",
    imgUrl: SashaWhite,
  },
  {
    attribute: "Cassidy Corset Belt + Giselle Top",
    value: "Cassidy Black Corset Belt",
    imgUrl: CassidyCorsetBeltGiselleTop,
  },
  {
    attribute: "Genevieve Dress",
    value: "Genevieve Baby Pink Tulle Mini Dress With Gloves",
    imgUrl: GenevieveDress,
  },
  {
    attribute: "Irene + Estrella",
    value: "Carla Mauve Silk Corset Top",
    imgUrl: IreneEstrella,
  },
  {
    attribute: "Brie, Brielle, Betty Set",
    value: "Betty Teddy Long Cardigan",
    imgUrl: BrieBrielleBettySet,
  },
  {
    attribute: "Baby Pink Schiffli Pixie",
    value: "Pixie Baby Pink Schiffli Puff Corset Dress",
    imgUrl: BabyPinkSchiffliPixie,
  },
  {
    attribute: "Anastasia Gown",
    value: "Anastasia Black and Nude Tulle Corset Gown",
    imgUrl: AnastasiaGown,
  },
  {
    attribute: "Camille Organza Dress",
    value: "Camille Floral Organza Corset Dress",
    imgUrl: CamilleOrganzaDress,
  },
  {
    attribute: "Belle Lavender",
    value: "Belle Lavender Ombre Ruffle Tulle Corset Dress",
    imgUrl: BelleLavender,
  },
  {
    attribute: "Reese Dress",
    value: "Reese Rainbow Organza Corset Mini Dress",
    imgUrl: ReeseDress,
  },
  {
    attribute: "Calliope Top",
    value: "Calliope Puff Sleeve Crop Top",
    imgUrl: CalliopeTop,
  },
  {
    attribute: "Donna + Jessica",
    value: "Donna Black Embroidered Jacquard Corset Blazer",
    imgUrl: DonnaJessica,
  },
  {
    attribute: "Althea Lavender Gown",
    value: "Althea Lavender Embroidered Corset Gown",
    imgUrl: AltheaLavenderGown,
  },
  {
    attribute: "Kaia + Kayla Set",
    value: "Kaia White 3-D Floral Embroidered Corset",
    imgUrl: KaiaKaylaSet,
  },
  {
    attribute: "Twyla Daisy + Ava Jeans",
    value: "Twyla Daisy Mesh Corset Tee",
    imgUrl: TwylaDaisyAvaJeans,
  },
  {
    attribute: "Dianna Corset",
    value: "Dianna Embroidered Puff Sleeve Corset Top",
    imgUrl: DiannaCorset,
  },
  {
    attribute: "Laura + Charlie Pants",
    value: "Charlie Wide Leg High Waist Pants",
    imgUrl: LauraCharliePants,
  },
  {
    attribute: "Rain, Riley, Rory",
    value: "Riley Mauve Rib Cardigan",
    imgUrl: RainRileyRory,
  },
  {
    attribute: "Isabelle Dress",
    value: "Isabelle Red High-Low Ruffle Tulle Corset Dress",
    imgUrl: IsabelleDress,
  },
  {
    attribute: "Carla Black",
    value: "Carla Black Silk Corset Top",
    imgUrl: CarlaBlack,
  },
  {
    attribute: "Stacy Lounge Set",
    value: "Simone Lavender Teddy Sweatshirt Dress",
    imgUrl: StacyLoungeSet,
  },
  {
    attribute: "Annalise Dress",
    value: "Annalise Embroidered Corset Mini Dress",
    imgUrl: AnnaliseDress,
  },
  {
    attribute: "Fleur + Freya",
    value: "Fleur Embroidered Jacquard Blazer Jacket",
    imgUrl: FleurFreya,
  },
  {
    attribute: "Carina Set",
    value: "Carina Black Textured Mesh Coord Set",
    imgUrl: CarinaSet,
  },
  {
    attribute: "Reina + Ramona",
    value: "Reina Black Mesh + Lace Bustier Corset Top",
    imgUrl: ReinaRamona,
  },
  {
    attribute: "Dixie Corset + Evie Jeans",
    value: "Ava Wide Leg High Waist Jeans",
    imgUrl: DixieCorsetEvieJeans,
  },
  {
    attribute: "Eliana + Carmen",
    value: "Cindy Lavender Crop Sweatshirt",
    imgUrl: ElianaCarmen,
  },
  {
    attribute: "Sasha Blush",
    value: "Sasha Blush Embroidered Corset Top",
    imgUrl: SashaBlush,
  },
  {
    attribute: "Maia Linen Dress",
    value: "Maia Linen Corset Backless Midi Dress",
    imgUrl: MaiaLinenDress,
  },
  {
    attribute: "Kendall + Hailey",
    value: "Hailey Tan Faux Leather Flare Pants",
    imgUrl: KendallHailey,
  },
];

const initialState = {
  allStyleProducts: rowsData,
};

const styleProductSlice = createSlice({
  name: "styleProduct",
  initialState,
  reducers: {
    updateStyleProduct(state, action) {
      const { newProductData, index } = action.payload;
      let copyAllStyleProducts = [...state.allStyleProducts];
      console.log("copyAllStyleProducts after copy", copyAllStyleProducts);
      copyAllStyleProducts[index] = { ...newProductData };
      console.log("copyAllStyleProducts after add", copyAllStyleProducts);
      state.allStyleProducts = copyAllStyleProducts;
    },
  },
});

export const styleProductActions = styleProductSlice.actions;
export default styleProductSlice.reducer;
