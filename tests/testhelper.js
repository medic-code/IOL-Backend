const Iol = require("../models/iol");

const initialLens = [
  {"lens":"Alcon AcrySof MA60BM",
    "material":"",
    "hapmaterial":"PMMA",
    "opmaterial":"Acrylate/Methacrylate Copolymer",
    "design":"3 Piece Modified-C",
    "range":"+6.0 through +30.0 diopter",
    "steps":"0.50 D",
    "opticdia":"6 mm",
    "length":"13 mm",
    "nominal":"10",
    "haigis":"a0=1.443 a1=0.077 a2=0.163",
    "hoffer":"pACD=6.08",
    "holladay":"sf=2.33",
    "srkt":"A=119.8",
    "srk2":"A=120.4",
    "barret":"",
    "cartridge":"",
    "inyector":"",
    "link":"https://embed.widencdn.net/pdf/plus/alcon/fyeexlxlzj/10-500-088_us_en.pdf?u=4rqn9d",
}];

const lensInDb = async () => {
  const lens = await Iol.find({})
  return lens.map(lens => lens.toJSON())
}

module.exports = {
  initialLens,
  lensInDb
}